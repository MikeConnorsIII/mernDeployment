const mongoose = require("mongoose")

const database = "petSHelterdb"

mongoose.set('strictQuery', false)
mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Here is the list of pets -  ${database}`))
.catch((error) => console.log("Got to clean something up!", error))