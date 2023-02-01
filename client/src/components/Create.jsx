import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Create = () => {
  
        const [name, setName] = useState("")
        const [type, setType] = useState("")
        const [description, setDescription] = useState("")
        const [skill1, setSkill1] = useState("")
        const [skill2, setSkill2] = useState("")
        const [skill3, setSkill3] = useState("")

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const petOBJ = {name, type, description, skill1, skill2, skill3}
    axios.post('http://localhost:8000/api/pet', petOBJ)
    // come back to here as it may be api/pets
    .then(res => {
      navigate("/")
    })
      .catch(err =>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    })
  }

  return (
    <div>
        <div className=''>
        <h1>Pet Shelter</h1>
        <button className="btn btn-outline-success" ><Link to = {`/`}>back to home</Link></button>
        </div>
        

        <form onSubmit={handleSubmit}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
          <div>
            <label>Name</label>
            <input type="text" onChange={(e) => {setName(e.target.value)}} />

          </div>
          <div>
            <label>Type</label>
            <input type="text" onChange={(e) => {setType(e.target.value)}} />
          </div>
          <div>
          <label>Description</label>
            <input type="text" onChange={(e) => {setDescription(e.target.value)}} />
          </div>
          <div>
          <label>Skill1</label>
            <input type="text" onChange={(e) => {setSkill1(e.target.value)}} />
          </div>
          <div>
          <label>Skill2</label>
            <input type="text" onChange={(e) => {setSkill2(e.target.value)}} />
          </div>
          <div>
          <label>Skill3</label>
            <input type="text" onChange={(e) => {setSkill3(e.target.value)}} />
          </div>

          <div>
            <button type="submit">Add Pet</button>
            
          </div>
        </form>
    </div>
  )
}


export default Create