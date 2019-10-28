const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const url = process.env.MONGODB_URI
mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true })

const contactSchema = new mongoose.Schema({
    name: { type: String, minlength: 3, required: true, unique: true },
    number: { type: String, minlength: 8, required: true, unique: true }
})

contactSchema.plugin(uniqueValidator);

contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
})

const Contact = new mongoose.model('Contact',contactSchema)


module.exports = Contact