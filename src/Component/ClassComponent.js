import React, { Fragment } from "react";

class ClassComponent extends React.Component{
    render(){
        return(
            <Fragment>
                <h2>ClassComponent</h2>
                <p>ProductName: {this.props.ProductName}</p>
                <p>Rs: {this.props.Rs}</p>
                <p>Quantity: {this.props.Quantity}</p>
                <p>Display Size: <span style={{backgroundColor:'red',color:"white",padding:'10px'}}>
                    {this.props.Size}</span></p>
                <p>Color: {this.props.Color}</p>
                <hr/>
                <h3>Total Prize: {this.props.Total}</h3>
            </Fragment>
        )
    }
} 
export default ClassComponent