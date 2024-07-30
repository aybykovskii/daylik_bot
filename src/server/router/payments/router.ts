import { makeRouter } from '../metadata'

import { PaymentsController } from './controller'

export const paymentsRouter = makeRouter(new PaymentsController())
