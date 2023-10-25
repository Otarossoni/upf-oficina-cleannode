import { findPeopleOlderThan } from '../mock/functions/findPeopleOlderThan'
import { older } from '../mock/functions/older'
import { Person } from '../mock/models/person'

{
  const people = [
    { name: 'Otávio Monteiro Rossoni', age: 21 },
    { name: 'Person Test', age: 17 },
  ]
  const age = 18

  const old = older(people, age)
  console.log(old)
}

{
  const people: Person[] = [
    { name: 'Otávio Monteiro Rossoni', age: 21 },
    { name: 'Person Test', age: 17 },
  ]
  const limitAge = 18

  const peopleOlderThan = findPeopleOlderThan(people, limitAge)
  console.log(peopleOlderThan)
}
