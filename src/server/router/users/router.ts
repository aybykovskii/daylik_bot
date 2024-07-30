import { makeRouter } from '../metadata'

import { UsersController } from './controller'

export const usersRouter = makeRouter(new UsersController())
