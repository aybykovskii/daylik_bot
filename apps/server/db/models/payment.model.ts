import { BelongsToGetAssociationMixin, CreationOptional, DataTypes, NonAttribute, sql } from '@sequelize/core'
import { Attribute, Default, NotNull, Table, Unique } from '@sequelize/core/decorators-legacy'

import { typeToArray } from '@/common/validation'
import { PaymentDto, PaymentFullData, paymentStatus } from '@/types/payments'

import { BaseUuidModel } from './base.model'
import { UserModel } from './user.model'

@Table({ tableName: 'payments', modelName: 'Payment' })
export class PaymentModel extends BaseUuidModel<PaymentModel> {
  @Attribute(DataTypes.INTEGER)
  @NotNull
  declare userId: PaymentDto['userId']

  @Attribute(DataTypes.STRING)
  @NotNull
  @Default('subscription' satisfies PaymentDto['type'])
  declare type: CreationOptional<PaymentDto['type']>

  @Attribute(DataTypes.STRING)
  @NotNull
  @Unique
  @Default(sql.uuidV4)
  declare paymentId: CreationOptional<PaymentDto['paymentId']>

  @Attribute(DataTypes.STRING)
  @NotNull
  @Unique
  @Default(sql.uuidV4)
  declare idempotenceKey: CreationOptional<PaymentDto['idempotenceKey']>

  @Attribute(DataTypes.INTEGER)
  declare amount: PaymentDto['amount']

  @Attribute(DataTypes.ENUM(typeToArray(paymentStatus)))
  @Default('pending' satisfies PaymentDto['status'])
  declare status: CreationOptional<PaymentDto['status']>

  @Attribute(DataTypes.STRING)
  @NotNull
  @Default('RUB')
  declare currency: CreationOptional<PaymentDto['currency']>

  @Attribute(DataTypes.STRING)
  @NotNull
  declare description: PaymentDto['description']

  @Attribute(DataTypes.STRING)
  declare provider: CreationOptional<PaymentDto['provider']>

  @Attribute(DataTypes.STRING)
  declare providerPaymentId: CreationOptional<PaymentDto['providerPaymentId']>

  /** Defined by {@link UserModel} */
  declare user: NonAttribute<UserModel>
  declare getUser: BelongsToGetAssociationMixin<UserModel>

  asDto(): PaymentDto {
    return {
      ...this.getBaseDto(),
      type: this.type,
      userId: this.userId,
      paymentId: this.paymentId,
      idempotenceKey: this.idempotenceKey,
      amount: this.amount,
      status: this.status,
      currency: this.currency,
      description: this.description,
      provider: this.provider,
      providerPaymentId: this.providerPaymentId,
    }
  }

  async asFullData(): Promise<PaymentFullData> {
    const dto = this.asDto()
    const user = await this.getUser()
    const userDto = await user!.asDto()

    return {
      ...dto,
      user: userDto,
    }
  }
}
