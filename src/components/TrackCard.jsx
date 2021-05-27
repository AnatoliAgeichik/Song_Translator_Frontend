import React from 'react';
import { Link } from "react-router-dom"

export class TrackCard extends React.Component{
    render(){
        return(
            <div class="card text-center p-3 mt-3">
                <div class="card-body">
                    <h5 class="card-title">{this.props.track.name}</h5>
                    <h6 class="card-subtitle text-muted">{this.props.track.singer}</h6>
                    <p class="card-text">{this.props.track.text}</p>
                    <Link className="btn btn-secondary" to={{pathname:`/tracks/${this.props.track.id}`,
                                                             state: this.props.track}}>Add Singer</Link>
                </div>
            </div>
        )
    }
}

export default TrackCard
