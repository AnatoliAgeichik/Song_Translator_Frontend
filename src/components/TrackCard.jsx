import React from 'react';


export class TrackCard extends React.Component{
    render(){
        return(
            <div class="card text-center p-3 mt-3">
                <div class="card-body">
                    <h5 class="card-title">{this.props.track.name}</h5>
                    <h6 class="card-subtitle text-muted">{this.props.track.singer}</h6>
                    <p class="card-text">{this.props.track.text}</p>
                    <a href="#" class="btn btn-secondary">View details</a>
                </div>
            </div>
        )
    }
}

export default TrackCard
