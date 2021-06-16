import React from 'react';

import {Footer} from 'components/Footer'
import {Header} from 'components/Header'
import {AuthenticationForm} from "components/AuthenticationForm"


export class AuthenticationPage extends React.Component{

    render() {
        return (
            <div>
                <Header/>
                <div className='min-vh-100'>
                 <AuthenticationForm/>
                </div>
                <Footer/>
            </div>
        );
    }
}
