import { DbService, UsersService } from '@modules'

import {
	CreateFriendshipRequestDto,
	FriendshipRequestFullData,
	UpdateFriendshipRequestDto,
} from 'shared'

import { BadRequestError, NotFoundError, Service } from '@common'

@Service({ name: 'friendshipService', services: [DbService, UsersService] })
export class FriendshipService {
	constructor(
		private readonly dbService: DbService,
		private readonly usersService: UsersService
	) {}

	async find<
		IsInternal extends boolean,
		Result = IsInternal extends true
			? DbService['FriendshipRequestModel']
			: FriendshipRequestFullData,
	>(id: string, isInternal?: IsInternal): Promise<Result> {
		const request = await this.dbService.friendshipRequest.findByPk(id)

		if (!request) {
			throw new NotFoundError('server.error.friendshipRequests.not_found')
		}

		return (isInternal ? request : request.asFullData()) as Result
	}

	findOne = async (id: string): Promise<FriendshipRequestFullData> => this.find(id)

	findAllByUserId = async (userId: number): Promise<FriendshipRequestFullData[]> => {
		const requests = await this.dbService.friendshipRequest.findAll({ where: { userId } })

		const fullDataRequests = await Promise.all(requests.map((request) => request.asFullData()))

		return fullDataRequests
	}

	create = async (dto: CreateFriendshipRequestDto): Promise<FriendshipRequestFullData> => {
		const sameRequest = await this.dbService.friendshipRequest.findOne({
			where: {
				targetUserId: dto.targetUserId,
				userId: dto.userId,
			},
		})

		if (sameRequest) {
			throw new BadRequestError('server.error.friendshipRequests.already_exists')
		}

		const request = await this.dbService.friendshipRequest.create(dto)

		return request.asFullData()
	}

	update = async (
		id: string,
		{ status }: UpdateFriendshipRequestDto
	): Promise<FriendshipRequestFullData> => {
		const friendshipRequest = await this.find(id, true)

		if (friendshipRequest.status !== 'pending') {
			throw new BadRequestError('server.error.friendshipRequests.not_pending')
		}

		const updatedRequest = await this.dbService.sequelize.transaction(async (transaction) => {
			const updatedRequest = await friendshipRequest.update({ status }, { transaction })

			if (status === 'accepted') {
				await this.acceptFriendshipRequest(updatedRequest)
			}

			return updatedRequest
		})

		return updatedRequest.asFullData()
	}

	private async acceptFriendshipRequest(request: DbService['FriendshipRequestModel']) {
		const user = await this.usersService.getOneInternal(request.userId, true)
		const targetUser = await this.dbService.user.findByPk(request.targetUserId)

		if (!user || !targetUser) {
			throw new NotFoundError('server.error.users.not_found')
		}

		await user.addFriend(request.targetUserId)
	}

	delete = async (id: string): Promise<void> => {
		const friendshipRequest = await this.find(id, true)

		await friendshipRequest.destroy()
	}
}
