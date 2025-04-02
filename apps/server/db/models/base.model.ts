import {
	CreationOptional,
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
	sql,
} from '@sequelize/core'
import {
	Attribute,
	AutoIncrement,
	Default,
	PrimaryKey,
	Table,
} from '@sequelize/core/decorators-legacy'

import { IntId, UUID } from '@types'

type ModelDatesBase = {
	createdAt: Date
	updatedAt: Date

	ISODates(): {
		createdAt: string
		updatedAt: string
	}
}

type ModelIntId = ModelDatesBase & {
	id: IntId

	getBaseDto(): {
		id: IntId
		createdAt: string
		updatedAt: string
	}
}

type ModelUuidId = ModelDatesBase & {
	id: UUID

	getBaseDto(): {
		id: UUID
		createdAt: string
		updatedAt: string
	}
}

@Table.Abstract
class ModelDates<M extends Model>
	extends Model<InferAttributes<M>, InferCreationAttributes<M>>
	implements ModelDatesBase
{
	@Attribute(DataTypes.DATE)
	@Default(DataTypes.NOW)
	declare createdAt: CreationOptional<Date>

	@Attribute(DataTypes.DATE)
	@Default(DataTypes.NOW)
	declare updatedAt: CreationOptional<Date>

	ISODates() {
		return {
			createdAt: this.createdAt.toISOString(),
			updatedAt: this.updatedAt.toISOString(),
		}
	}
}

@Table.Abstract
export class BaseIntModel<M extends Model> extends ModelDates<M> implements ModelIntId {
	@Attribute(DataTypes.INTEGER)
	@PrimaryKey
	@AutoIncrement
	declare id: CreationOptional<IntId>

	getBaseDto() {
		return {
			id: this.id,
			...this.ISODates(),
		}
	}
	
}

@Table.Abstract
export class BaseUuidModel<M extends Model> extends ModelDates<M> implements ModelUuidId {
	@Attribute(DataTypes.UUID)
	@PrimaryKey
	@Default(sql.uuidV4)
	declare id: CreationOptional<UUID>

	getBaseDto() {
		return {
			id: this.id,
			...this.ISODates(),
		}
	}
}
