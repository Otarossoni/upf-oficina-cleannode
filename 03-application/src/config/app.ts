import { FastifyInstance, fastify } from 'fastify'
import { usersRoutes } from '../http/controllers/users/routes'

export const app: FastifyInstance = fastify()

app.register(usersRoutes)
