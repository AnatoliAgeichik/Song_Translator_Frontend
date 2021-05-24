import React from 'react';
import {Footer} from '../../components/Footer/footer'
import {Header} from '../../components/Header/header'
import {TrackList} from '../../components/TrackList/TrackList'


export class HomePage extends React.Component{

render() {
return (
    <div className="p-0 m-0">
        <Header/>
        <div class='min-vh-100'>
         <TrackList/>   
        </div>
        <Footer/>
    </div>
);
}
}
