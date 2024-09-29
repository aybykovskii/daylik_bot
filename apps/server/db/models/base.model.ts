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

import { IntId, UUIDId } from 'shared'

@Table.Abstract
class ModelDates<M extends Model> extends Model<InferAttributes<M>, InferCreationAttributes<M>> {
	@Attribute(DataTypes.DATE)
	@Default(DataTypes.NOW)
	declare createdAt: CreationOptional<Date>

	@Attribute(DataTypes.DATE)
	@Default(DataTypes.NOW)
	declare updatedAt: CreationOptional<Date>
}

@Table.Abstract
export class BaseIntModel<M extends Model> extends ModelDates<M> {
	@Attribute(DataTypes.INTEGER)
	@PrimaryKey
	@AutoIncrement
	declare id: CreationOptional<IntId>
}

@Table.Abstract
export class BaseUuidModel<M extends Model> extends ModelDates<M> {
	@Attribute(DataTypes.UUID)
	@PrimaryKey
	@Default(sql.uuidV4)
	declare id: CreationOptional<UUIDId>
}
