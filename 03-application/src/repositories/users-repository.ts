import { User } from '../models/user'

export interface UsersRepository {
  fetchAll(): Promise<User[]>
  findByEmail(email: string): Promise<User | null>
  create(data: User): Promise<User>
}
