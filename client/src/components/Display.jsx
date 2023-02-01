//rafce for this standard plate
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Display = () => {
    const [petList, setpetList] = useState([])

    


    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then((res) => {
                console.log('This is my display page data', res.data)
                setpetList(res.data)
            })
            .catch((err) => { console.log("This is my display page error: ", err) })
    }, [])
    // use

    
    return (
        <div className='container'>
            <div className='d-flex justify-content-between '>
            <h1>Pet Shelter</h1>
            <button className="btn btn-outline-success" ><Link to={`/create`}>add a pet to the shelter</Link></button>
            </div>

            <h3>These pets are looking for a good home</h3>

            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th id="myTable">Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="petList">
                    {
                        petList.map((pet, i) => {
                            return (
                                <tr key={i}>
                                    <td>{pet.name}</td>
                                    
                                    <td>{pet.type}</td>

                                    <td>
                                        <button className="btn btn-success"><Link to={`/update/${pet._id}`}>Edit</Link></button> |  | <button className="btn btn-info"><Link to={`/details/${pet._id}`}>Details</Link></button></td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Display