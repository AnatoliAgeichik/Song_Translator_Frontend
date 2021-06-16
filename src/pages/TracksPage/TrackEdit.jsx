import React, {Component} from 'react'

import {Footer} from 'components/Footer'
import {Header} from 'components/Header'
import TrackInput from "components/TrackInput";

class TrackAdd extends Component{

    formCallback = data => {
       this.putData(data)
    }

    putData(data) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' ,
                       'Authorization': 'Token ' + localStorage.getItem("token")},
            body: JSON.stringify(data)
        };
        fetch(`/tracks/${this.props.location.state.id}`, requestOptions)
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="offset-md-4 min-vh-100 m-5">
                    <TrackInput parentCallback={this.formCallback} state={this.props.location.state}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TrackAdd
