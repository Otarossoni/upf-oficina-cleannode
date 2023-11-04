import { InMemoryUsersRepository } from '../../repositories/in-memory/in-memory-users-repository'
import { CreateUserUseCase } from '../create-user'

export function makeCreateUserUseCase() {
  const usersRepository = new InMemoryUsersRepository()
  const createUserUseCase = new CreateUserUseCase(usersRepository)

  return createUserUseCase
}
