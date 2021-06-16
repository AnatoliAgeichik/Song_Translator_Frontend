import React, {Component} from 'react'

import { Footer } from 'components/Footer'
import {Header} from 'components/Header'
import {SingerInput} from "components/SingerInput";
import sendRequest from "services/RequestService"

class SingerAdd extends Component{

    formCallback = data => {
      sendRequest(data, "/singers", "POST")
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
