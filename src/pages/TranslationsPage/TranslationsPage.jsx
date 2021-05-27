import React from 'react';
import { Link } from "react-router-dom"

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import {TranslationList} from '../../components/TranslationList'

export class TranslationsPage extends React.Component{

    render() {
        return (
            <div className="p-0 m-0">
                <Header/>
                <div>
                <Link className="btn btn-secondary" to="/addTrack">Add Track</Link>
                </div>
                <div class='min-vh-100'>
                 <TranslationList id={this.props.location.state}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default TranslationsPage
