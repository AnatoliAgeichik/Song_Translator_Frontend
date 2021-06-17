import React, {Component} from 'react'

import { Footer } from 'components/Footer'
import {Header} from 'components/Header'
import {SingerInput} from "components/SingerInput";
import sendRequest from "services/RequestService"

class SingerEdit extends Component{

    formCallback = data => {
       sendRequest(data, `/singers/${this.props.location.state.id}`, 'PUT')
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

export default SingerEdit
