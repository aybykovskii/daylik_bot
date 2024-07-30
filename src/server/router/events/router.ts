import { makeRouter } from '../metadata'

import { EventsController } from './controller'

export const eventsRouter = makeRouter(new EventsController())
