import React from 'react';
import { Link } from "react-router-dom"

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'



export class TrackDetail extends React.Component{

    render() {
        return (
            <div>
                <Header/>
                <div className="jumbotron min-vh-100 text-center">
                    <h1 className="display-4">{this.props.location.state.name}</h1>
                    <p className="lead">{this.props.location.state.singer}</p>
                    <hr className="my-4"/>
                    <p>{this.props.location.state.text}</p>
                    <p className="lead">
                        <Link className="btn btn-secondary btn-lg"
                              role="button"
                              to={{pathname:`/tracks/${this.props.location.state.id}/translations`,
                                   state: this.props.location.state.id}}>View translations</Link>
                    </p>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default TrackDetail
