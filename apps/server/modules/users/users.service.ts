import { Result, ResultAsync, err, ok } from 'neverthrow'

import { UserModel } from '@/db'
import { UserDto, UserFullData } from '@/types/users'
import { Op } from '@sequelize/core'

import { CreateUserDto, UpdateUserDto, UsersError } from './users.types'

export class UsersService {
  model = UserModel

  getAll = async (): Promise<Result<UserDto[], never>> => {
    const users = await this.model.findAll()

    return ok(users.map((user) => user.asDto()))
  }

  _read = async (id: number | string): Promise<UserModel | null> => {
    return await this.model.findOne({
      where: { [Op.or]: [{ id }, { telegramUserId: id.toString() }] },
    })
  }

  read = async (id: number | string): Promise<Result<UserFullData, UsersError>> => {
    const user = await this._read(id)

    if (!user) {
      return err('ERR_USER_DOES_NOT_EXIST')
    }

    return ok(await user.asFullData())
  }

  create = async (dto: CreateUserDto): Promise<Result<UserFullData, UsersError>> => {
    const [user, created] = await this.model.findOrCreate({
      where: { telegramUserId: dto.telegramUserId },
      defaults: {
        ...dto,
        role: 'user' satisfies UserDto['role'],
      },
    })

    if (!created) {
      return err('ERR_USER_ALREADY_EXISTS')
    }

    return ok(await user.asFullData())
  }

  update = async (id: number, dto: UpdateUserDto): Promise<Result<UserFullData, UsersError>> => {
    const user = await this.model.findByPk(id)

    if (!user) {
      return err('ERR_USER_DOES_NOT_EXIST')
    }

    const updatedUser = await ResultAsync.fromPromise(user.update(dto), (err) => err)

    if (updatedUser.isErr()) {
      return err('ERR_USER_UPDATE_FAILED')
    }

    return ok(await user.asFullData())
  }

  delete = async (id: number): Promise<Result<void, UsersError>> => {
    const user = await this.model.findByPk(id)

    if (!user) {
      return err('ERR_USER_DOES_NOT_EXIST')
    }

    await user.destroy()

    return ok()
  }
}

export const usersService = new UsersService()
