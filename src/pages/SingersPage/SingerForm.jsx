import React, {Component} from 'react'
import axios from 'axios'
import { Footer } from '../../components/Footer/footer'
import {Header} from '../../components/Header/header'

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
        console.log(this.state)
        axios.post('http://127.0.0.1:8000/api/singers/', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }


    render(){ 
        const {name} = this.state
        return(
            <div>
                <Header/>
            <div class="offset-md-3 min-vh-100"  style={{ width: "36rem" }}>
                <form onSubmit={this.submitHandler} >
                    <div class="form-group">
                    <label for="exampleFormControlInput1">Singer Name</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    name="name" 
                    id="exampleFormControlInput1" 
                    placeholder="FavoriteSinger" 
                    value={name}
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
