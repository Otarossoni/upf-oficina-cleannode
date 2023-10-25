import { Person } from '../models/person'

/**
 * This function finds and returns an array of people older than the age limit.
 *
 * @param people An array of Person objects.
 * @param limitAge The minimum age desired.
 * @returns An array with people who meet the criteria.
 */
export function findPeopleOlderThan(
  people: Person[],
  limitAge: number,
): Person[] {
  return people.filter((people) => people.age >= limitAge)
}
