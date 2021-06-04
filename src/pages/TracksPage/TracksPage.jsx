import React from 'react';

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import {TrackList} from '../../components/TrackList'
import {PageMenu} from "../../components/PageMenu";


export class TracksPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            search:""
        }
    }

    searchCallback = data => {
       this.setState({search:data})
    }

    render() {
        return (
            <div>
                <Header/>
                <div className='min-vh-100'>
                    <div className="d-flex justify-content-center">
                        <PageMenu parentCallback = {this.searchCallback} btnText="Add Tracks" form_link="/addTrack" />
                        <div className="col-md-10 pr-5">
                            <TrackList search={this.state.search}/>
                        </div>
                    </div>
                 </div>
                <Footer/>
            </div>
        );
    }
}
