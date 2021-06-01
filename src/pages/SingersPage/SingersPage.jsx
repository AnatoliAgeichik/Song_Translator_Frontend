import React from 'react';
import { Link } from "react-router-dom"

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import {SingerList} from '../../components/SingerList'

export class SingersPage extends React.Component{

render() {
    return (
        <div>
            <Header/>
            <div>
            <Link className="btn btn-secondary" to="/addSinger">Add Singer</Link>
            </div>
            <div className='min-vh-100'>
             <SingerList/>
            </div>
            <Footer/>
        </div>
    );
}
}
