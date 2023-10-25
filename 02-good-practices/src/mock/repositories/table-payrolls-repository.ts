import { randomUUID } from 'crypto'

interface Payroll {
  id?: string
  name: string
}

export class TablePayrollsRepository {
  public items: Payroll[] = []

  findById(id: string) {
    const payroll = this.items.find((item) => item.id === id)

    if (!payroll) {
      return null
    }

    return payroll
  }

  create({ name }: Payroll) {
    const payroll = {
      id: randomUUID(),
      name,
    }

    this.items.push(payroll)
    return payroll
  }
}
