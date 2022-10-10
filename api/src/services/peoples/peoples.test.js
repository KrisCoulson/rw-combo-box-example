import { peoples, people, deletePeople } from './peoples'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('peoples', () => {
  scenario('returns all peoples', async (scenario) => {
    const result = await peoples()

    expect(result.length).toEqual(Object.keys(scenario.people).length)
  })

  scenario('returns a single people', async (scenario) => {
    const result = await people({ id: scenario.people.one.id })

    expect(result).toEqual(scenario.people.one)
  })

  scenario('deletes a people', async (scenario) => {
    const original = await deletePeople({
      id: scenario.people.one.id,
    })
    const result = await people({ id: original.id })

    expect(result).toEqual(null)
  })
})
