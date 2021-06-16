import React from "react";
import {Button, Form} from "react-bootstrap";

export class TrackInput extends React.Component{

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

     submitHandler = (event) => {
        this.props.parentCallback(this.state)
        event.preventDefault()
     }


    render() {
        const {track_name, text, original_language, singer} = this.state
        return (
            <Form onSubmit={this.submitHandler} >
                <Form.Group>
                    <Form.Label>Track Name</Form.Label>
                    <Form.Control type="text" name="track_name" value={track_name} onChange={this.changeHandler}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Text</Form.Label>
                    <Form.Control type="textarea" name="text" value={text} onChange={this.changeHandler} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Original language</Form.Label>
                    <Form.Control type="text" name="original_language" pattern="[a-z]{2}"
                                  value={original_language} onChange={this.changeHandler} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Singer name</Form.Label>
                    <Form.Control type="text" name="singer"
                                  value={singer} onChange={this.changeHandlerSinger} />
                </Form.Group>

                <Button variant="secondary" type="submit">Submit</Button>
            </Form>

        );
    }
}

export default TrackInput
