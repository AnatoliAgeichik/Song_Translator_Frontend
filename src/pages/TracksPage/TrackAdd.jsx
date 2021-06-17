import React, {Component} from 'react'

import {Footer} from 'components/Footer'
import {Header} from 'components/Header'
import TrackInput from "components/TrackInput";
import sendRequest from "services/RequestService"

class TrackAdd extends Component{
    formCallback = data => {
       sendRequest(data, "/tracks/", "POST")
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
