import React, {Component} from 'react'
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('http://127.0.0.1:8000/api/singers/', requestOptions)
    }

    render(){ 
        return(
            <div>
                <Header/>
                <div class="offset-md-3 min-vh-100 m-5">
                <form onSubmit={this.submitHandler} >
                    <div class="form-group">
                    <label for="exampleFormControlInput1">Singer Name</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    name="name" 
                    id="exampleFormControlInput1" 
                    placeholder="FavoriteSinger" 
                    onChange={this.changeHandler}/>
                    </div>
                    <button class="btn-secondary" type="submit">Submit</button>
                </form>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default FormSinger
