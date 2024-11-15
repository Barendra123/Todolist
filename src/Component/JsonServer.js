import React, { useState,useEffect} from "react"
import axios from "axios"
import { Table,Container,Alert} from "react-bootstrap"

const JsonServer=()=>{

    const [user,setUser]=useState([])
    const [error,setError]=useState([])
    const [showerror,setshowError]=useState(false)

    useEffect(()=>{
        axios.get('http://localhost:3001/user')
        .then((Response)=>{
            console.log("res:",Response.data)
            setUser(Response.data)
        })
        
        .catch((error)=>{
            console.log("error:",error)
            setError(error)
            setshowError(true)
        })
    },[])
    console.log("error",error)
    console.log("user",user)
    return(
        <Container>
            <Container className="my-5 text-center">
            <h1>Users Details</h1>
            {
                showerror === true ? <Alert variant="danger">{error.message}</Alert>:
            <Table className="my-3" bordered>
                <thead>
                    <tr  className="teable-h">
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody className="t-body">
                   {
                    user.map((data)=>(
                        <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.designation}</td>
                    </tr>
                    ))
                   }
                </tbody>
            </Table>
}

        </Container>

        </Container>
    )
}
export default JsonServer
