import { TablePayrollsRepository } from '../mock/repositories/table-payrolls-repository'
import { TableFolhasDePagamentoRepository } from '../mock/repositories/table-folhas-de-pagamento-repository'

// Totalmente Traduzida
{
  const repository = new TablePayrollsRepository()

  const payroll = repository.create({ name: 'Teste' })
  const payrolls = repository.findById(payroll.id)

  console.log(payrolls)
}

// Parcialmente Traduzida
{
  const repository = new TableFolhasDePagamentoRepository()

  const folhaDePagamento = repository.create({ name: 'Teste' })
  const folhasDePagamento = repository.findById(folhaDePagamento.id)

  console.log(folhasDePagamento)
}
