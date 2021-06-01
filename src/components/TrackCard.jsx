import React from 'react';
import { Link } from "react-router-dom"

export class TrackCard extends React.Component{
    render(){
        return(
            <div className="card text-center p-3 mt-3">
                <div className="card-body">
                    <h5 className="card-title">{this.props.track.name}</h5>
                    <h6 className="card-subtitle text-muted">{this.props.track.singer}</h6>
                    <p className="card-text">{this.props.track.text}</p>
                    <Link className="btn btn-secondary" to={{pathname:`/tracks/${this.props.track.id}`,
                                                             state: this.props.track}}>View detail</Link>
                </div>
            </div>
        )
    }
}

export default TrackCard
