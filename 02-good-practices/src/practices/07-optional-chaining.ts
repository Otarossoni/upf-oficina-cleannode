{
  interface Person {
    name: string
    address?: {
      street: string
      city: string
      state: string
    }
  }

  const person1: Person = {
    name: 'João',
    address: {
      street: '123 Rua Principal',
      city: 'Qualquer Cidade',
      state: 'SP',
    },
  }

  const person2: Person = {
    name: 'Joana',
  }

  console.log(person1?.address?.city)
  console.log(person2?.address?.city)
}
