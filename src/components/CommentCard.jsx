import React from 'react';
import { Link } from "react-router-dom"


export class CommentCard extends React.Component{
    render(){
        return(
            <div className="card text-center p-3 mt-3">
                <div className="card-body">
                <p className="card-text">{this.props.comment.message}</p>
                <h5 className="card-title">{this.props.comment.mark}</h5>
                <Link className="btn btn-secondary"
                      to={{pathname:`/tracks/${this.props.comment.track_id}/comments/${this.props.comment.id}`,
                           state: this.props.comment}}>View detail</Link>
                </div>
            </div>
        )
    }
}

export default CommentCard
