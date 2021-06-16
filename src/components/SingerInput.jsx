import React from "react";
import {Button, Form} from "react-bootstrap";

export class SingerInput extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            name:''
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (event) => {
        this.props.parentCallback(this.state)
        event.preventDefault()
    }

    render() {
        return(
            <Form onSubmit={this.submitHandler} >
                <Form.Group controlId="formBasicEmail">
                        <Form.Label>Singer Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="FavoriteSinger"  onChange={this.changeHandler}/>
                </Form.Group>
                <Button variant="secondary" type="submit">Submit</Button>
            </Form>
        )
    }
}
