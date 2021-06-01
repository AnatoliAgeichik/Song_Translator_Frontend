import React from 'react';
import { Link } from "react-router-dom"

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import {TranslationList} from '../../components/TranslationList'

export class TranslationsPage extends React.Component{

    render() {
        return (
            <div>
                <Header/>
                <div>
                <Link className="btn btn-secondary"
                      to={{pathname:"/addTranslation", state: this.props.location.state}}>Add Translation</Link>
                </div>
                <div className='min-vh-100'>
                 <TranslationList id={this.props.location.state}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default TranslationsPage
