import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate, Link } from 'react-router-dom'


const Update = () => {
    const [name, setName] = useState("")
        const [type, setType] = useState("")
        const [description, setDescription] = useState("")
        const [skill1, setSkill1] = useState("")
        const [skill2, setSkill2] = useState("")
        const [skill3, setSkill3] = useState("")

    const [errors, setErrors] = useState([]);

    const [errorObj, setErrorObj] = useState({});
    const {id} = useParams()
    
    const navigate = useNavigate()

    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/" + id)
        .then((res)=>{
            console.log("this is my update get request: ", res.data)
            const pet = res.data
            setName(pet.name)
            setType(pet.type)
            setDescription(pet.description)
            setSkill1(pet.skill1)
            setSkill2(pet.skill2)
            setSkill3(pet.skill3)
        })
        .catch((err)=>console.log("This is our Update page get request", err))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const putObj = {name, type, description, skill1, skill2, skill3}
        axios.put(`http://localhost:8000/api/pets/${id}`, putObj)
        .then((res)=>{
            if(res.data.errors !== undefined){
                const errorResponse = res.data.errors; 
                const errObj = {
                    nameErr: errorResponse.name?.message,
                    typeErr: errorResponse.type?.message,
                    descriptionErr: errorResponse.description?.message,
                    skill1Err: errorResponse.skill1?.message,
                    skill2Err: errorResponse.skill2?.message,
                    skill3Err: errorResponse.skill3?.message,
                    
                }
                setErrorObj(errObj);
            }
            else{
                console.log("successfully updated",res)
                navigate("/")
            }

        })
        .catch(err =>{
            console.log(err)
            const errorResponse = err.response.data.errors; 
            // console.log(err)
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }

    return (
        <div>
            <div>
            <h1>Pet Shelter</h1>
            <button className="btn btn-outline-success" ><Link to={`/`}>back to home</Link></button>
            </div>

            <form onSubmit={handleSubmit}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <p>{errorObj.nameErr}</p>
                </div>

                <div>
                    <label>Type</label>
                    <input type="text" value={type} onChange={(e) => { setType(e.target.value) }} />
                    <p>{errorObj.typeErr}</p>
                </div>

                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />
                    <p>{errorObj.descriptionErr}</p>
                </div>

                <div>
                    <label>Skill1</label>
                    <input type="text" value={skill1} onChange={(e) => { setSkill1(e.target.value) }} />
                    <p>{errorObj.skill1Err}</p>
                </div>

                <div>
                    <label>Skill2</label>
                    <input type="text" value={skill2} onChange={(e) => { setSkill2(e.target.value) }} />
                    <p>{errorObj.skill2Err}</p>
                </div>
                
                <div>
                    <label>Skill3</label>
                    <input type="text" value={skill3} onChange={(e) => { setSkill3(e.target.value) }} />
                    <p>{errorObj.skill3Err}</p>
                </div>

                <div>
                    <button >Edit Pet</button>
                </div>

            </form>
        </div>
    )
}

export default Update