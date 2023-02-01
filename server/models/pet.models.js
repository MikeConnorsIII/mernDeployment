const mongoose = require("mongoose")

//create database table (called collections in MongoDB)
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "What is the pet's name?"],
        minlength: [3, "Name must be 3 characters long"]
    },
    type: {
        type: String,
        required: [true, "What kind of dog is he?"],
        minlength: [3, "name must be 3 characters long"]
    },
    description: {
        type: String, 
        required: [true, "Description is required"],
        minlength: [3, "Description must be 3 characters long"]
    },
    skill1: {
        type: String, 
        
    },
    skill2: {
        type: String, 
        
    },
    skill3: {
        type: String, 
        
    }
    
}, {timestamps: true})

module.exports = mongoose.model('Pet', PetSchema)