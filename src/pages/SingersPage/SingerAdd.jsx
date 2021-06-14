import React, {Component} from 'react'

import { Footer } from '../../components/Footer'
import {Header} from '../../components/Header'
import {SingerInput} from "../../components/SingerInput";

class SingerAdd extends Component{

    formCallback = data => {
       this.postData(data)
    }

    postData(data){
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8',
                'Authorization': 'token ' + localStorage.getItem("token")
            },
            body: JSON.stringify(data)
        };
        fetch('/singers', requestOptions)
    }

    render(){
        return(
            <div>
                <Header/>
                <div class="offset-md-3 min-vh-100 m-5">
                <SingerInput parentCallback={this.formCallback}/>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default SingerAdd
