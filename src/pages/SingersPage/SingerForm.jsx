import React, {Component} from 'react'
import {Button, Form} from "react-bootstrap";

import { Footer } from '../../components/Footer'
import {Header} from '../../components/Header'

class FormSinger extends Component{
    constructor(props){
        super(props)
        this.state ={
            name:''
        }
    }    

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(this.state)
        };
        fetch('/singers/', requestOptions)
    }

    render(){ 
        return(
            <div>
                <Header/>
                <div class="offset-md-3 min-vh-100 m-5">
                <Form onSubmit={this.submitHandler} >
                    <Form.Group controlId="formBasicEmail">
                            <Form.Label>Singer Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="FavoriteSinger"  onChange={this.changeHandler}/>
                    </Form.Group>
                    <Button variant="secondary" type="submit">Submit</Button>
                </Form>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default FormSinger
