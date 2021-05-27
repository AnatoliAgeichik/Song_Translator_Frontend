import React from 'react';

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'



export class SingerDetail extends React.Component{

    render() {
        return (
            <div className="p-0 m-0">
                <Header/>
                <div class="min-vh-100">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="display-4">{this.props.location.state.name}</h1>
                            <p class="lead">Description in future :)</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default SingerDetail
