import React, {Component} from 'react'

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'

import TrackInput from "../../components/TrackInput";

class TrackAdd extends Component{
    formCallback = data => {
       this.postData(data)
    }

    postData(data) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' ,
                       'Authorization': 'Token ' + localStorage.getItem("token")},
            body: JSON.stringify(data)
        };
        fetch('/tracks/', requestOptions)
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="offset-md-4 min-vh-100 m-5">
                    <TrackInput parentCallback={this.formCallback}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TrackAdd
