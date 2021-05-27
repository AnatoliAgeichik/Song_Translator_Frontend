import React from 'react';

export class SingerCard extends React.Component{
    render(){
        return(
            <div class="card text-center p-3 mt-3">
                <div class="card-body">
                <h5 class="card-title">{this.props.singer.name}</h5>
                <p class="card-text">pass</p>
                </div>
            </div>
        )
    }
}