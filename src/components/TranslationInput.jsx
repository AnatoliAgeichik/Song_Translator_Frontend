import React from "react";
import {Button, Form} from "react-bootstrap";


export class TranslationInput extends React.Component{
     constructor(props){
        super(props)
        this.state ={
            track_id:this.props.state,
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

    submitHandler = (event) => {
        this.props.parentCallback(this.state)
        event.preventDefault()
     }

    render(){
        const {text, language, auto_translate} = this.state
        return(
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
        )
    }
}

export default TranslationInput
