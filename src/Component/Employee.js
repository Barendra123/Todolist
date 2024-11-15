// import React,{useState} from "react";
import { Table,Container } from "react-bootstrap";
import empdetails from "./emp";

const EmployDetails =()=>{
    // const[Emp,setEmp]= useState([])

    return(
<Container>
    <h1 className="text-center my-3">Employee Details</h1>
    <Table className="my-3" bordered>
        <thead>
            <tr className="table-hr">
                <th>EmpID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Location</th>
            </tr>
            </thead>
            <tbody className="tobody-td">
               {
                empdetails.map((data)=>(
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.designation}</td>
                        <td>{data.Location}</td>
                    </tr>
                ))
               }
            </tbody>
    </Table>
</Container>
    )
}
export default EmployDetails