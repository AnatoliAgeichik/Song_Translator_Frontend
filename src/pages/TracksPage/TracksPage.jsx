import React from 'react';
import { Link } from "react-router-dom"

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import {TrackList} from '../../components/TrackList'

export class TracksPage extends React.Component{

render() {
return (
    <div className="p-0 m-0">
        <Header/>
        <div>
        <Link className="btn btn-secondary" to="/addTrack">Add Track</Link>
        </div>
        <div class='min-vh-100'>
         <TrackList/>   
        </div>
        <Footer/>
    </div>
);
}
}
