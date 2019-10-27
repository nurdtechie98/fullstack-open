require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Contact = require('./models/contact')

app.use(bodyParser.json())
morgan.token('data',(request)=>{
    if(request.method=='POST')
    return "::"+JSON.stringify(request.body.numbers)
    else
    return "::"
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))
app.use(cors())
app.use(express.static('build'))
let numbers = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456"
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523"
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345"
    },
    {
      id: 4,
      name: "Mary Poppendieck",
      number: "39-23-6423122"
    }
  ]


app.get('/api/persons',(request,response)=>{
    Contact.find({}).then(result=>{
        response.json(result.map(contact => contact.toJSON()));
    })
})

app.get('/info',(request,response)=>{
    var d = Date(Date.now()); 
    d = d.toString();
    Contact.find({}).then(result=>{
        response.send(
            `<p>Phonebook has info for ${result.length} people</p>
            ${d}
            `
        );
    })
})

app.get('/api/persons/:id',(request,response)=>{
    const id = Number(request.params.id);
    const number = numbers.find(number=>number.id===id);
    if(number)
    response.json(number);
    else
    response.status(404).end();
})

app.delete('/api/persons/:id',(request,response)=>{
    const id = Number(request.params.id);
    const number = numbers.find(number=>number.id===id);
    if(number)
    {
        numbers = numbers.filter(number=>number.id!==id);
        response.status(204).end();
    }
    else
    response.status(404).end();
})

app.post('/api/persons',(request,response)=>{
    console.log("Posssttteeedd")
    body = request.body;
    if (!body.numbers) {
        return response.status(400).json({ 
          error: 'content missing' 
        })
    }
    let number = body.numbers;
    if (!number.name) {
        return response.status(400).json({ 
          error: 'name missing' 
        })
    }
    else if (!number.number) {
        return response.status(400).json({ 
          error: 'number missing' 
        })
    }
    Contact.find({number:number.number}).then(result=>{
        if(result.length!==0)
        {
            return response.status(400).json({ 
                error: 'number must be unique' 
            })
        }
    })
    const contact = new Contact({
        name:number.name,
        number:number.number
    })
    contact.save().then(result=>{
        response.json(result.toJSON());
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
})