const PetController = require('../controllers/pet.controllers')

module.exports = (app) => {

    app.get("/api/test", PetController.testApi)
    //Create one 
    app.post("/api/pet", PetController.addPet)
    //Display all
    app.get("/api/pet", PetController.allPets)
    // //Display one
    app.get("/api/pets/:id", PetController.onePet)
    // // Update one
    app.put("/api/pets/:id", PetController.updatePet)
    // // Delete one
    app.delete("/api/pets/:id", PetController.deletePet)
} 