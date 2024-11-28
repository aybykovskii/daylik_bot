import { Service } from '@common'
import {
	EventDraftModel,
	EventModel,
	EventSharingModel,
	FriendshipRequestModel,
	PaymentModel,
	RewardModel,
	RoleModel,
	SettingsModel,
	StatisticsModel,
	SubscriptionModel,
	UserModel,
	getSequelize,
} from '@db'

@Service({ name: 'dbService', services: [] })
export class DbService {
	user = UserModel
	role = RoleModel
	reward = RewardModel
	settings = SettingsModel
	statistics = StatisticsModel
	subscription = SubscriptionModel
	event = EventModel
	eventDraft = EventDraftModel
	payment = PaymentModel
	eventSharing = EventSharingModel
	friendshipRequest = FriendshipRequestModel

	get sequelize() {
		return getSequelize()
	}

	declare UserModel: UserModel
	declare RoleModel: RoleModel
	declare RewardModel: RewardModel
	declare SettingsModel: SettingsModel
	declare StatisticsModel: StatisticsModel
	declare SubscriptionModel: SubscriptionModel
	declare EventModel: EventModel
	declare EventDraftModel: EventDraftModel
	declare PaymentModel: PaymentModel
	declare EventSharingModel: EventSharingModel
	declare FriendshipRequestModel: FriendshipRequestModel
}
