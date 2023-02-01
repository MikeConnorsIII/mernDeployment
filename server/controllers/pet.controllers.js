const Pet = require("../models/pet.models")
//testApi
module.exports.testApi = (req, res) => {
    res.json({status: 'Finding pets!' })
}
// addPet
module.exports.addPet = (req, res) => {
    const newPet = req.body
    // body of data coming in from our request is now newPet
    Pet.create(newPet)
    .then(Pet => res.json(Pet))
    // response.status(400).json(err)
    .catch(err => res.status(400).json(err))
}
// allPet
module.exports.allPets = (req, res) => {
    Pet.find()
    .then(Pet => res.json(Pet))
    .catch(err => res.json(err))
}
//onePet
module.exports.onePet = (req, res) => {
    const idFromSpace = req.params.id
    Pet.findOne({_id: idFromSpace})
    .then(onePet => res.json(onePet))
    .catch(err => res.json(err))
}
//updatePet
module.exports.updatePet = (req, res) => {
    const idFromSpace = req.params.id
    const newValue = req.body
    Pet.findOneAndUpdate({_id: idFromSpace}, newValue, {new: true, runValidators: true})
    .then(updatedValue => res.json(updatedValue))
    .catch(err => res.json(err))

    // err => res.status(400).json(err) maybe for later
}
//deletePet
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}