import React, {Component} from 'react'

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import {Button, Form} from "react-bootstrap";


class TrackForm extends Component{
      constructor(props){
        super(props)
        this.state ={
            track_name:'',
            text:'',
            original_language:'',
            singer:[]
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    changeHandlerSinger = (e) =>{
          this.setState({[e.target.name]: (e.target.value.split(',')).map(name => (name.trim()))})
    }


    submitHandler = e => {
        e.preventDefault()
        //this.state.singer = (this.state.singer.split(',')).map(name => (name.trim()))
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,
                       'Authorization': 'Token ' + localStorage.getItem("token")},
            body: JSON.stringify(this.state)
        };
        fetch('/tracks/', requestOptions)
    }

    render(){ 
        const {track_name, text, original_language, singer} = this.state
        return(
            <div>
                <Header/> 
                <div className="offset-md-4 min-vh-100 m-5">
                    <Form onSubmit={this.submitHandler} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Track Name</Form.Label>
                            <Form.Control type="text" name="track_name" value={track_name} onChange={this.changeHandler}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Text</Form.Label>
                            <Form.Control type="textarea" name="text" value={text} onChange={this.changeHandler} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Original language</Form.Label>
                            <Form.Control type="text" name="original_language" pattern="[a-z]{2}"
                                          value={original_language} onChange={this.changeHandler} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Singer name</Form.Label>
                            <Form.Control type="text" name="singer"
                                          value={singer} onChange={this.changeHandlerSinger} />
                        </Form.Group>

                        <Button variant="secondary" type="submit">Submit</Button>
                    </Form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TrackForm
