/* eslint-disable @typescript-eslint/no-unused-vars */
{
  interface Usuario {
    nome: string
    endereco?: {
      rua: string
      cidade: string
      estado: string
    }
  }

  function cadastraUsuarioComVariosParametros(
    nome: string,
    rua: string,
    cidade: string,
    estado: string,
  ) {
    // Realiza o cadastro do usuário
  }

  function cadastraUsuarioComObjeto(usuario: Usuario) {
    // Realiza o cadastro do usuário
  }

  cadastraUsuarioComVariosParametros('Otávio', 'Rua Teste', 'Passo Fundo', 'RS')

  cadastraUsuarioComObjeto({
    nome: 'Otávio',
    endereco: {
      rua: 'Rua Teste',
      cidade: 'Passo Fundo',
      estado: 'RS',
    },
  })
}
