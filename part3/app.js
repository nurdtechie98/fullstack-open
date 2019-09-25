const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

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
    response.json(numbers);
})

app.get('/info',(request,response)=>{
    var d = Date(Date.now()); 
    d = d.toString();
    response.send(
        `<p>Phonebook has info for ${numbers.length} people</p>
        ${d}
        `
    );
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

const generateId = ()=>{
    return Math.floor((Math.random()*5000000)+1)
}
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
    const already_number = numbers.find(already_number=>already_number.name===number.name);
    if(already_number)
    {
        return response.status(400).json({ 
            error: 'name must be unique' 
        })
    }
    number.id = generateId();
    numbers = numbers.concat(number);
    response.json(number);
})

const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
})