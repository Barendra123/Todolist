import React from 'react';
import { Button } from 'react-bootstrap';

class Message extends React.Component{
    constructor(){
        super()
            this.state = {
                message:"Welcome to Visitor"
            }
    }
    changeMessage(){
        this.setState({
                message:"Thankyou for Visiting OYO 🙏🙏🙏🙏"
        })
        
    }
    ResetMessage(){
        this.setState({
            message:"Welcome to OYO HOTEL!!!!❤️"
        })
    }
    render(){
        return(
            <>
            <br/>
            <h1> {this.state.message}</h1><br/>
            <Button onClick={()=>this.changeMessage()}>Suscribe</Button>
            <Button onClick={()=>this.ResetMessage()} className='mx-4 btn-danger'>Reset</Button>
            </>
        )
    }
}
export default Message;

