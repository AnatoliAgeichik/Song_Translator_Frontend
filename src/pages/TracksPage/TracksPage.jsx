import React from 'react';
import {Footer} from '../../components/footer'
import {Header} from '../../components/header'
import {TrackList} from '../../components/TrackList/TrackList'

export class TracksPage extends React.Component{

render() {
return (
    <div className="p-0 m-0">
        <Header/>
        <div>
        <a href="/addTrack" class="btn btn-secondary" role="button">Add Track</a>
        </div>
        <div class='min-vh-100'>
         <TrackList/>   
        </div>
        <Footer/>
    </div>
);
}
}
