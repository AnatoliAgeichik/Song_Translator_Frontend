import React from 'react';
import {Footer} from '../../components/footer'
import {Header} from '../../components/header'
import {SingerList} from '../../components/SingerList'

export class SingersPage extends React.Component{

render() {
return (
    <div className="p-0 m-0">
        <Header/>
        <div>
        <a href="/addSinger" class="btn btn-secondary" role="button">Add Track</a>
        </div>
        <div class='min-vh-100'>
         <SingerList/>   
        </div>
        <Footer/>
    </div>
);
}
}