import { FastifyInstance } from 'fastify'
import { createUser } from './create-users'
import { listAllUsers } from './list-all-users'

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users/create', createUser)
  app.get('/users', listAllUsers)
}
