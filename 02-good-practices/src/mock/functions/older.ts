/* eslint-disable @typescript-eslint/no-explicit-any */

export function older(people, age): any[] {
  const result: any[] = []

  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= age) {
      result.push(people[i])
    }
  }

  return result
}
