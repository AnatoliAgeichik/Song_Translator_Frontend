import React from 'react';

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import {SingerList} from '../../components/SingerList'
import {PageMenu} from '../../components/PageMenu'

export class SingersPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            search:""
        }
    }

    searchCallback = data => {
        this.setState({search:data})
    }

    render() {
        return (
            <div>
                <Header/>
                <div className='min-vh-100'>
                    <div className="d-flex justify-content-center">
                        <PageMenu parentCallback = {this.searchCallback} btnText="Add Singer" form_link="/addSinger" />
                        <div className="col-md-10 pr-5">
                            <SingerList search={this.state.search}/>
                        </div>
                    </div>
                 </div>
                <Footer/>
            </div>
        );
    }
}
