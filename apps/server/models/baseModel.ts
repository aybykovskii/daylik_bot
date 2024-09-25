import {
	CreationOptional,
	DataTypes,
	InferAttributes,
	InferCreationAttributes,
	Model,
} from '@sequelize/core'
import {
	Attribute,
	AutoIncrement,
	Default,
	PrimaryKey,
	Table,
} from '@sequelize/core/decorators-legacy'

import { ModelId } from 'shared/types'

@Table.Abstract
export class BaseModel<M extends Model> extends Model<
	InferAttributes<M>,
	InferCreationAttributes<M>
> {
	@Attribute(DataTypes.INTEGER)
	@PrimaryKey
	@AutoIncrement
	declare id: CreationOptional<ModelId>

	@Attribute(DataTypes.DATE)
	@Default(DataTypes.NOW)
	declare createdAt: CreationOptional<Date>

	@Attribute(DataTypes.DATE)
	@Default(DataTypes.NOW)
	declare updatedAt: CreationOptional<Date>
}
