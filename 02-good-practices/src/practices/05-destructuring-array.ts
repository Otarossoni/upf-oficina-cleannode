{
  const upfExampleArray = {
    anoFundacao: 1968,
    usuario: '@universidadeupf',
    setores: [
      { nome: 'Administração' },
      { nome: 'Contabilidade' },
      { nome: 'Limpeza' },
      { nome: 'Segurança' },
    ],
  }

  const { setores } = upfExampleArray

  const [administracao, contabilidade, limpeza, seguranca] = setores

  console.log(administracao)
  console.log(contabilidade)
  console.log(limpeza)
  console.log(seguranca)
}
