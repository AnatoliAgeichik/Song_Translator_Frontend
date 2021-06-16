import React, {Component} from 'react'

import {Footer} from 'components/Footer'
import {Header} from 'components/Header'
import TrackInput from "components/TrackInput";
import sendRequest from "services/RequestService"

class TrackAdd extends Component{

    formCallback = data => {
       sendRequest(data, `/tracks/${this.props.location.state.id}`, 'PUT')
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
