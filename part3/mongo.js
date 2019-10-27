const mongoose = require('mongoose')

if(process.argv.length<3 ) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://nurdtechie98:${password}@donut-lopoz.mongodb.net/phonebook?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true })

const contactSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Contact = new mongoose.model('Contact',contactSchema)


if(process.argv.length===3)
{
    Contact.find({}).then(contacts=>{
        contacts.forEach(contact => {
            console.log(contact.name,contact.number)
        });
        mongoose.connection.close()
    })
}
else if(process.argv.length==5)
{
    const name = process.argv[3]
    const number = process.argv[4]
    const contact = new Contact({
        name: name,
        number: number
    })
    contact.save().then(result=>{
        console.log("added",result.name,"number",result.number,"to phonebook")
        mongoose.connection.close()
    })
}
  