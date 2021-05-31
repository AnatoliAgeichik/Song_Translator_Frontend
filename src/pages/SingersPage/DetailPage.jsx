import React from 'react';

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'



export class SingerDetail extends React.Component{

    render() {
        return (
            <div>
                <Header/>
                <div className="min-vh-100">
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
