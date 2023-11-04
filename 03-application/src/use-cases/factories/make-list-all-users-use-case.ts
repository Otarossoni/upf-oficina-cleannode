import { InMemoryUsersRepository } from '../../repositories/in-memory/in-memory-users-repository'
import { ListAllUsersUseCase } from '../list-all-users'

export function makeListAllUsersUseCase() {
  const usersRepository = new InMemoryUsersRepository()
  const listAllUsersUseCase = new ListAllUsersUseCase(usersRepository)

  return listAllUsersUseCase
}
