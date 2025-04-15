import { Transaction } from '@sequelize/core'
import { Ok, Result, err, ok } from 'neverthrow'

import { FriendshipRequestModel } from '@/db'
import { Errors } from '@/types/common'
import { FriendshipRequestDto } from '@/types/friendship-requests'

import { usersService } from '../users'

import {
  CreateFriendshipRequestDto,
  FriendshipError,
  FriendshipRequestFullData,
  ReadAllFriendshipRequestsArg,
  UpdateFriendshipRequestDto,
} from './friendship.types'

export class FriendshipService {
  model = FriendshipRequestModel

  readAll = async (arg: ReadAllFriendshipRequestsArg): Promise<Ok<FriendshipRequestDto[], never>> => {
    const requests = await this.model.findAll({ where: { userId: arg.userId } })

    return ok(requests.map((request) => request.asDto()))
  }

  read = async (
    id: string
  ): Promise<Result<FriendshipRequestFullData, Errors<typeof FriendshipError, 'DoesNotExist'>>> => {
    const request = await this.model.findByPk(id)

    if (!request) {
      return err('ERR_FRIENDSHIP_REQUEST_DOES_NOT_EXIST')
    }

    return ok(await request.asFullData())
  }

  create = async (
    dto: CreateFriendshipRequestDto
  ): Promise<Result<FriendshipRequestFullData, Errors<typeof FriendshipError, 'AlreadyExists'>>> => {
    const [request, created] = await this.model.findOrCreate({
      where: {
        targetUserId: dto.targetUserId,
        userId: dto.userId,
      },
    })

    if (!created) {
      return err('ERR_FRIENDSHIP_REQUEST_ALREADY_EXISTS')
    }

    return ok(await request.asFullData())
  }

  update = async (
    id: string,
    { status }: UpdateFriendshipRequestDto
  ): Promise<
    Result<
      FriendshipRequestFullData,
      Errors<typeof FriendshipError, 'DoesNotExist' | 'NotPending' | 'UserDoesNotExist'>
    >
  > => {
    const request = await this.model.findByPk(id)

    if (!request) {
      return err('ERR_FRIENDSHIP_REQUEST_DOES_NOT_EXIST')
    }

    if (request.status !== 'pending') {
      return err('ERR_FRIENDSHIP_REQUEST_NOT_PENDING')
    }

    const updatedRequest = await this.model.sequelize.transaction(async (transaction) => {
      const updatedRequest = await request.update({ status }, { transaction })

      if (status === 'accepted') {
        const result = await this.acceptFriendshipRequest(updatedRequest, transaction)

        if (result.isErr()) {
          transaction.rollback()
          return err(result.error)
        }
      }

      return ok(updatedRequest)
    })

    if (updatedRequest.isErr()) {
      return err(updatedRequest.error)
    }

    return ok(await updatedRequest.value.asFullData())
  }

  private async acceptFriendshipRequest(
    request: FriendshipRequestModel,
    transaction?: Transaction
  ): Promise<Result<void, Errors<typeof FriendshipError, 'UserDoesNotExist'>>> {
    const user = await usersService._read(request.userId)
    const targetUser = await usersService._read(request.targetUserId)

    if (!user || !targetUser) {
      return err('ERR_FRIENDSHIP_REQUEST_USER_DOES_NOT_EXIST')
    }

    await user.addFriend(targetUser, { transaction })

    return ok()
  }

  delete = async (id: string): Promise<Result<void, Errors<typeof FriendshipError, 'DoesNotExist'>>> => {
    const request = await this.model.findByPk(id)

    if (!request) {
      return err('ERR_FRIENDSHIP_REQUEST_DOES_NOT_EXIST')
    }

    await request.destroy()

    return ok()
  }
}

export const friendshipService = new FriendshipService()
