import { makeRouter } from '../metadata'

import { EventDraftsController } from './controller'

export const eventDraftsRouter = makeRouter(new EventDraftsController())
