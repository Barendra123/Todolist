import { Button,FormControl} from "react-bootstrap";
import React,{ useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";


const TodoList=()=>{

    const [todoItem,settodoItem]=useState('')//hook of  uses state methode of string
    const [listArr,setlistArr]=useState([])//hook of uses state methode of arry

    const sumbitHander =(e)=>{    //it a variable for on submit from fromcontrol & e is the event it avaide the event capatureing & reloading 
        e.preventDefault()
        setlistArr([...listArr,todoItem]) //sperade methode it help merge two identifier 
        settodoItem('')
    }
    console.log("listArr:",listArr)

    const deleteHandler=(num)=>{
        console.log("id:",num)
        let temp =listArr.filter((data,index)=>index!==num)
        setlistArr(temp)
        console.log("temp:",temp)
    }

    return(
        <section className="section-style" style={{marginLeft:'9rem'}}>
            <div className="div-style my-5 mx-5">
                <h2 className="text1">Welcome to To <span style={{color:'#6e18f3'}}>Do List</span></h2>
                <h3 className="text2">Enter Your TodoList</h3>
                <form onSubmit={sumbitHander}>  
                    <FormControl className="fromcntly" type="text" placeholder="Enter your Todolist"
                     style={{height:'3rem',color:'red',backgroundColor:'#fff',fontSize:'20px',width:'35rem',
                     marginLeft:'1rem',boxShadow:'5px 3px 3px 3px hwb(0 25% 85%)',borderRadius:'20px'}}
                     value={todoItem}
                     onChange={(e)=>settodoItem(e.target.value)}/><br/>
                    <Button className="my-2" style={{fontSize:'20px',boxShadow:'5px 3px 3px 3px hwb(0 15% 85%)',borderRadius:'20px'}} type="sumbit">Add</Button>
                </form>
                {
                    listArr.map((data,index)=>(
                    <li style={{color:'#fff',fontSize:'20px'}} key={index}>
                        {data}
                        <FaRegTrashAlt onClick={()=> deleteHandler(index)} style={{color:'red',marginLeft:'1rem'}}/>
                    </li>
                    ))
                }
            </div>
        </section>
    )
}
export default TodoList

