import React,{useEffect,useState} from "react";
import { Alert, Container} from "react-bootstrap";
import axios from "axios";

const Sudentdetails=()=>{
    const [student,setStudent]=useState([])
    const [error,setError]=useState([])
    const [showerror,setshowError]=useState(false)

    useEffect(()=>{
        axios.get('http://localhost:30012/StudentDetils')
        .then((Response)=>{
            console.log(Response.data)
            setStudent(Response.data)
        })
        .catch((error)=>{
            console.log(error)
            setError(error)
            setshowError(true)
        })
    },[])
    console.log(error)
    console.log(student)
    
    return(
       <Container className=".con-style">
            <h1 className="text-center my-3">Student Details</h1>
            {
            showerror === true ? <Alert variant="danger">{error.message}</Alert>:
            <ol>
                {
                    student.map((data)=>(
                        <div key={data.StudentID} className="student">
                            <strong>Student ID :</strong>{data.StudentID}<br/>
                            <strong>Student Name :</strong>{data.StudentName}<br/>
                            <strong>Subject :</strong>{data.Subject}<br/>
                            <strong>Passed out year :</strong>{data.Passedoutyear}<br/><br/>
                        </div>
                    ))
                }
            </ol>
            }
       </Container>
    )
}
export default Sudentdetails;