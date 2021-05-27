import React, {Component} from 'react'

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'


class TrackForm extends Component{
      constructor(props){
        super(props)
        this.state ={
            name:'',
            text:'',
            original_language:'',
            singer:[]
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        this.state.singer = (this.state.singer.split(',')).map(name => (name.trim()))        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        fetch('http://127.0.0.1:8000/api/tracks/', requestOptions)
    }

    render(){ 
        const {name, text, original_language, singer} = this.state
        return(
            <div>
                <Header/> 
                <div class="offset-md-4 min-vh-100 m-5">
                    <form onSubmit={this.submitHandler} >
                        <div class="form-group">
                        <i class="fa fa-google"></i>
                        <label>Track Name</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        name="name" 
                        value={name}
                        onChange={this.changeHandler}/>
                        </div>

                        <div class="form-group">
                        <label>Text</label>
                        <input 
                        type="textarea" 
                        class="form-control" 
                        name="text" 
                        value={text}
                        onChange={this.changeHandler}/>
                        </div>

                        <div class="form-group">
                        <label >Original language</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        name="original_language" 
                        pattern="[a-z]{2}"
                        value={original_language}
                        onChange={this.changeHandler}/>
                        </div>

                        <div class="form-group">
                        <label>Singer name</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        name="singer" 
                        value={singer}
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

export default TrackForm
