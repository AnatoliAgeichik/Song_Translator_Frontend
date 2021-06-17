import React from 'react';

import {Footer} from 'components/Footer'
import {Header} from 'components/Header'
import {Link} from "react-router-dom";
import {FaPencilAlt} from "react-icons/fa";



export class SingerDetail extends React.Component{

    render() {
        return (
            <div>
                <Header/>
                <div className="min-vh-100">
                    <div className="d-flex justify-content-end">
                        <Link to={{pathname:"/editSinger",
                                   state:this.props.location.state}}><FaPencilAlt/></Link>
                    </div>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">{this.props.location.state.name}</h1>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default SingerDetail
