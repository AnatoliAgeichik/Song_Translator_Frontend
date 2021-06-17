import React, {Component} from "react";

import {Header} from "components/Header";
import {Footer} from "components/Footer";
import TranslationInput from "components/TranslationInput";
import sendRequest from "../../services/RequestService";

class TranslationEdit extends Component{
    formCallback = data => {
       sendRequest(data,
           `/tracks/${this.props.location.state.track_id}/translations/${this.props.location.state.id}`,
           "PUT")
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="offset-md-4 min-vh-100 m-5">
                    <TranslationInput parentCallback={this.formCallback} state={this.props.location.state.id}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TranslationEdit
