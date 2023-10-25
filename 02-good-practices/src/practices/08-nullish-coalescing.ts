{
  const value1: string | null = null
  const value2: string | undefined = undefined
  const value3: string | null | undefined = 'olá'

  console.log(value1 ?? 'default')
  console.log(value2 ?? 'default')
  console.log(value3 ?? 'default')
}
