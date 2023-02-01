import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'


const Details = () => {
    const [pet, setPet] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()
    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((res) => setPet(res.data))
        .catch(err => console.log("This is our detail page", + err))
    }, [id])
// dependancy array
const handleDelete = (e, id) => {
    console.log(`Adopting ${id}`, e)
    axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then((res) => {
            // setDeleteToggle(!deleteToggle)
            navigate("/")

        })
        .catch((err) => { console.log(err) })
}


var i=0; 
const likeAnimal = () => {           
    
    i=1;       
    document.getElementById('number').innerHTML=i;
}


    return ( 
        <>
        <div className='container'>
        <div className='d-flex justify-content-between'>
            <h1>Pet Shelter</h1>
            <p><button className="btn btn-success"><Link to = {"/"}> Home </Link></button></p>
        </div>
        <div>
        <h3>Details about: {pet.name}</h3>
        <button className="btn btn-danger" onClick={(e) => { handleDelete(e, pet._id) }}>Delete</button>
        </div>
            <h1>Pet Details</h1>
        <div className=''>
            <div className='p-2'>
            <h3>Type:</h3> <p>{pet.type}</p>
            <h3>Description: </h3><p>{pet.description}</p>
            <h3>Skills:</h3>
            </div>

            <div className='p-2'>
            <p>{pet.skill1}</p>
            <p>{pet.skill2}</p>
            <p>{pet.skill3}</p>
            </div>
        <button class="noDouble" onClick={likeAnimal} className='btn btn-success'>Like {pet.name}</button>
            
        </div>
        <div>
        
        
        <p><span type="text" id="number" value="0">0 </span>Like(s)</p>
        
        </div>
        </div>
        </>
    )
}

export default Details