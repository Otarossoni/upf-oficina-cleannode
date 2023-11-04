import { FastifyRequest, FastifyReply } from 'fastify'
import { makeListAllUsersUseCase } from '../../../use-cases/factories/make-list-all-users-use-case'

export async function listAllUsers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const listAllUsersUseCase = makeListAllUsersUseCase()

  const users = await listAllUsersUseCase.execute()

  return reply.status(200).send(users)
}
