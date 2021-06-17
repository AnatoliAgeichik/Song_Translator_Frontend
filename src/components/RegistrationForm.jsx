import React, {Component} from 'react'

import {Button, Form} from "react-bootstrap";


export class RegistrationForm extends Component{
      constructor(props){
        super(props)
        this.state ={
            username:'',
            email:'',
            password:''
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('/users/', requestOptions)
            .then(response=>response.json())
        .then((data)=>{
            localStorage.setItem("token", data.token)
            localStorage.setItem("logged", "true")
        });
    }

    render(){
        const {username,email, password} = this.state
        return(
           <Form onSubmit={this.submitHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name="username" value={username}
                              onChange={this.changeHandler}/>

              </Form.Group>

               <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={email}
                              onChange={this.changeHandler}/>

              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password}
                              onChange={this.changeHandler} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
        )
    }
}

export default RegistrationForm

