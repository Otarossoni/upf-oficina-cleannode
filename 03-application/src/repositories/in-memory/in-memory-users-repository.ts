import { User } from '../../models/user'
import { UsersRepository } from '../users-repository'
import { randomUUID } from 'node:crypto'
import { usersTable } from '../../database/users'

export class InMemoryUsersRepository implements UsersRepository {
  async fetchAll() {
    return usersTable
  }

  async findByEmail(email: string) {
    const user = usersTable.find((item) => item.email === email)

    if (!user) {
      return null
    }

    return user
  }

  async create({ name, email, password }: User) {
    const user = {
      id: randomUUID(),
      name,
      email,
      password,
    }

    usersTable.push(user)
    return user
  }
}
