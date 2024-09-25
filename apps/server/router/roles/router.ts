import { makeRouter } from '../metadata'

import { RolesController } from './controller'

export const rolesRouter = makeRouter(new RolesController())
