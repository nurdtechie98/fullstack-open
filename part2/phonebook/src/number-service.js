import axios from 'axios'

const baseUrl = "http://localhost:3001/numbers"

const getAll = () =>( 
    axios
    .get(baseUrl)
    .then(response=>response.data)
    .catch(error=>console.log(error))
)

const remove = id =>( 
    axios
    .delete(baseUrl+"/"+id)
    .then(response=>response.data)
    .catch(error=>console.log(error))
)

const update = (id,number) =>( 
    axios
    .put(baseUrl+"/"+id,number)
    .then(response=>response.data)
    .catch(error=>console.log(error))
)

const addNote = (numbers) =>{
    console.log(numbers);
    return(
    axios
    .post(baseUrl,numbers)
    .then(response=>response.data)
    .catch(error=>console.log(error))
    )
}

export default
{
    getAll,
    remove,
    update,
    addNote
}