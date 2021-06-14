import React, {Component} from "react";

import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import TranslationInput from "../../components/TranslationInput";

class TranslationEdit extends Component{
    formCallback = data => {
       this.postData(data)
    }

    postData (data) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json',
                       'Authorization': 'Token ' + localStorage.getItem("token")},
            body: JSON.stringify(data)
        };
        fetch(`/tracks/${this.props.location.state.track_id}/translations/${this.props.location.state.id}`, requestOptions)
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

export default TranslationEdit
