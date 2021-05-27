import React from 'react';
import { Link } from "react-router-dom"

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import {SingerList} from '../../components/SingerList'

export class SingersPage extends React.Component{

render() {
    return (
        <div className="p-0 m-0">
            <Header/>
            <div>
            <Link className="btn btn-secondary" to="/addSinger">Add Singer</Link>
            </div>
            <div class='min-vh-100'>
             <SingerList/>
            </div>
            <Footer/>
        </div>
    );
}
}
