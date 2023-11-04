import { User } from '../models/user'
import { UsersRepository } from '../repositories/users-repository'

interface ListAllUsersUseCaseResponse {
  users: User[]
}

export class ListAllUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<ListAllUsersUseCaseResponse> {
    const users = await this.usersRepository.fetchAll()

    return { users }
  }
}
