import React from 'react';

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'

export class TranslationDetail extends React.Component{

    render() {
        return (
            <div>
                <Header/>
                <div className="jumbotron min-vh-100 text-center">
                    <p className="lead">{this.props.location.state.language}</p>
                    <hr className="my-4"/>
                    <p>{this.props.location.state.text}</p>
                </div>
                <Footer/>
            </div>
        );
    }
}
    
export default TranslationDetail
