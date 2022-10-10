export const schema = gql`
  type People {
    id: String!
    name: String
  }

  type Query {
    peoples: [People!]! @requireAuth
    people(id: String!): People @requireAuth
  }

  input CreatePeopleInput {
    name: String
  }

  input UpdatePeopleInput {
    name: String
  }

  type Mutation {
    createPeople(input: CreatePeopleInput!): People! @requireAuth
    updatePeople(id: String!, input: UpdatePeopleInput!): People! @requireAuth
    deletePeople(id: String!): People! @requireAuth
  }
`
