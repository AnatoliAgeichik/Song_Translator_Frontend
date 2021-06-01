import React from 'react';
import { Link } from "react-router-dom"

export class SingerCard extends React.Component{
    render(){
        return(
            <div className="card text-center p-3 mt-3">
                <div className="card-body">
                <h5 className="card-title">{this.props.singer.name}</h5>
                <p className="card-text">pass</p>
                <Link className="btn btn-secondary" to={{pathname:`/singers/${this.props.singer.id}`,
                                                         state: this.props.singer}}>View detail</Link>
                </div>
            </div>
        )
    }
}

export default SingerCard
