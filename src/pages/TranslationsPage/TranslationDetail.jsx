import React from 'react';
import { Link } from "react-router-dom"

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'

export class TranslationDetail extends React.Component{

    render() {
        return (
            <div className="p-0 m-0">
                <Header/>
                <div class="jumbotron min-vh-100 text-center">
                    <p class="lead">{this.props.location.state.language}</p>
                    <hr class="my-4"/>
                    <p>{this.props.location.state.text}</p>
                </div>
                <Footer/>
            </div>
        );
    }
}
    
export default TranslationDetail
