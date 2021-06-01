import React, {Component} from "react";
import {Form, Button} from 'react-bootstrap'

import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";

class TranslationForm extends Component{
      constructor(props){
        super(props)
        this.state ={
            track_id:this.props.location.state,
            text:'',
            language:'en',
            auto_translate:"true"
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    changeHandlerAutoTranslate = (e) =>{
          this.setState({[e.target.name]: (e.target.value==="true")})
    }



    submitHandler = e => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        console.log(JSON.stringify(this.state))
        fetch(`/tracks/${this.props.location.state}/translations/`, requestOptions)
    }

    render(){
        const {text, language, auto_translate} = this.state
        return(
            <div>
                <Header/>
                <div className="offset-md-4 min-vh-100 m-5">

                    <Form onSubmit={this.submitHandler} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Text</Form.Label>
                            <Form.Control type="textarea" name="text" value={text} onChange={this.changeHandler} />
                            <Form.Text className="text-muted">
                              If you select auto translation, this field may be empty
                            </Form.Text>
                      </Form.Group>

                        <Form.Group>
                            <Form.Label>Language</Form.Label>
                            <Form.Control as="select" value={language} onChange={this.changeHandler} name="language">
                                <option value="en">English</option>
                                <option value="ru">Russian</option>
                                <option value="fr">French</option>
                                <option value="sp">Spanish</option>
                                <option value="it">Italian</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Auto translation</Form.Label>
                            <Form.Control as="select" value={auto_translate} onChange={this.changeHandlerAutoTranslate}
                                          name="auto_translate">
                                <option value="true">true</option>
                                <option value="false">false</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="secondary" type="submit">Submit</Button>
                    </Form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TranslationForm
