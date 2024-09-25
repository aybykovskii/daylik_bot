import { makeRouter } from "@router/metadata"

import { AuthController } from "./controller"

export const authRouter = makeRouter(new AuthController())