import { db } from 'src/lib/db'

export const peoples = () => {
  return db.people.findMany({ take: Math.floor(Math.random() * 6) })
}

export const people = ({ id }) => {
  return db.people.findUnique({
    where: { id },
  })
}

export const createPeople = ({ input }) => {
  return db.people.create({
    data: input,
  })
}

export const updatePeople = ({ id, input }) => {
  return db.people.update({
    data: input,
    where: { id },
  })
}

export const deletePeople = ({ id }) => {
  return db.people.delete({
    where: { id },
  })
}
