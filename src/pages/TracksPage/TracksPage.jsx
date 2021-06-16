import React from 'react';

import {Footer} from 'components/Footer'
import {Header} from 'components/Header'
import {TrackList} from 'components/TrackList'
import {PageMenu} from "components/PageMenu";
import {Dropdown, DropdownButton} from "react-bootstrap";


export class TracksPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            search:"",
            ordering:"&ordering=track_name",
            title_dropdown:"Track name"
        }
    }

    searchCallback = data => {
       this.setState({search:data})
    }

    historyCallback = data => {
        this.props.history.push(data)
    }


    orderHandler = data =>{
        this.setState({ordering:data})
        if (data.substr(data.indexOf("=")+1) === "track_name"){
            this.setState({title_dropdown:"Track name"})
        }
        else if (data.substr(data.indexOf("=")+1) === "-track_name"){
            this.setState({title_dropdown:"Track name desc"})
        }
        else if (data.substr(data.indexOf("=")+1) === "singer"){
            this.setState({title_dropdown:"Singer name"})
        }
        else if (data.substr(data.indexOf("=")+1) === "-singer"){
            this.setState({title_dropdown:"Singer name desc"})
        }
        else if (data.substr(data.indexOf("=")+1) === "id"){
            this.setState({title_dropdown:"Language"})
        }
        else if (data.substr(data.indexOf("=")+1) === "-id"){
            this.setState({title_dropdown:"Language desc"})
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className='min-vh-100'>
                    <div className="d-flex justify-content-center">
                        <div className="pt-5 pl-5">
                            <PageMenu parentCallback = {this.searchCallback} btnText="Add Tracks" form_link="/addTrack" />
                            <span>Sort by</span>
                            <DropdownButton alignRight title={this.state.title_dropdown} id="dropdown-menu-align-right"
                                                variant="secondary"
                                                onSelect={this.orderHandler}>
                                    <Dropdown.Item eventKey="&ordering=track_name">Track name</Dropdown.Item>
                                    <Dropdown.Item eventKey="&ordering=-track_name">Track name desc</Dropdown.Item>
                                    <Dropdown.Item eventKey="&ordering=singer">Singer name</Dropdown.Item>
                                    <Dropdown.Item eventKey="&ordering=-singer">Singer name desc</Dropdown.Item>
                                    <Dropdown.Item eventKey="&ordering=id">Language</Dropdown.Item>
                                    <Dropdown.Item eventKey="&ordering=-id">Language desc</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className="col-md-10 pr-5">
                            <TrackList search={this.state.search} ordering={this.state.ordering}
                                       histroyCallaback = {this.historyCallback}/>
                        </div>
                    </div>
                 </div>
                <Footer/>
            </div>
        );
    }
}
