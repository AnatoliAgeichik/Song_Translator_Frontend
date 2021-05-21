import React from 'react';
import {Footer} from '../../components/footer'
import {Header} from '../../components/header'
import {TrackList} from '../../components/TrackList/TrackList'
import './HomePage.scss'

export class HomePage extends React.Component{

render() {
return (
    <div className="p-0 m-0">
        <div class='content-10'>
        <Header/>
        </div>
        <div class='content'>
         <TrackList/>   
        </div>
        <div class='content-10'>
        <Footer/>
        </div>
    </div>
);
}
}
