import React, {Component} from "react";

import {Header} from "components/Header";
import {Footer} from "components/Footer";
import TranslationInput from "components/TranslationInput";
import sendRequest from "services/RequestService"

class TranslationAdd extends Component{
    formCallback = data => {
       sendRequest(data, `/tracks/${this.props.location.state}/translations`, 'POST')
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="offset-md-4 min-vh-100 m-5">
                    <TranslationInput parentCallback={this.formCallback} state={this.props.location.state}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TranslationAdd
