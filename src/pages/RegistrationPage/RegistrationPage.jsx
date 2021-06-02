import React from 'react';

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import {RegistrationForm} from '../../components/RegistrationForm'


export class RegistrationPage extends React.Component{

    render() {
        return (
            <div>
                <Header/>
                <div className='min-vh-100'>
                 <RegistrationForm/>
                </div>
                <Footer/>
            </div>
        );
    }
}
