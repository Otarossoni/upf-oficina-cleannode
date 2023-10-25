{
  const upfExampleObject = {
    anoFundacao: 1968,
    usuario: '@universidadeupf',
    setores: [
      { nome: 'Administração' },
      { nome: 'Contabilidade' },
      { nome: 'Limpeza' },
      { nome: 'Segurança' },
    ],
  }

  const { usuario, anoFundacao } = upfExampleObject

  console.log(usuario)
  console.log(anoFundacao)
}
