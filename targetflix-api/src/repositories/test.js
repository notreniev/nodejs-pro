import { test } from '../mongo'

export const findAll = async () => {
  const coll = await test()

  const result = await coll.find().toArray()
  return result
}