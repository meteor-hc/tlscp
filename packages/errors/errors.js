export const throwError = (message) =>
  Errors.insert({message: message})

const Errors = new Mongo.Collection(null)

Template.errors.helpers({
  errors: () => Errors.find()
})
