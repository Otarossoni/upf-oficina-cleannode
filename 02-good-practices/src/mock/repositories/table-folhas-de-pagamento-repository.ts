import { randomUUID } from 'crypto'

interface FolhaDePagamento {
  id?: string
  name: string
}

export class TableFolhasDePagamentoRepository {
  public items: FolhaDePagamento[] = []

  findById(id: string) {
    const folhaDePagamento = this.items.find((item) => item.id === id)

    if (!folhaDePagamento) {
      return null
    }

    return folhaDePagamento
  }

  create({ name }: FolhaDePagamento) {
    const folhaDePagamento = {
      id: randomUUID(),
      name,
    }

    this.items.push(folhaDePagamento)
    return folhaDePagamento
  }
}
