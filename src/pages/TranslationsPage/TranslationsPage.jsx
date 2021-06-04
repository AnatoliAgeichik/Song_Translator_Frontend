import React from 'react';
import { Link } from "react-router-dom"
import {Button} from "react-bootstrap";

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import {TranslationList} from '../../components/TranslationList'


export class TranslationsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            search:""
        }
    }

    searchHandler = e => {
       this.setState({[e.target.name]:e.target.value})
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="min-vh-100">
                    <div className="d-flex justify-content-center">
                        <div className="pt-5 pl-5">
                            <Link className="btn btn-secondary"
                                  to={{pathname:"/addTranslation", state: this.props.location.state}}>Add Translation</Link>
                            <form className="input-group mb-3 pt-4" onSubmit={this.searchHandler}>
                                <input type="text" className="form-control" placeholder="search"
                                       name="search" onChange={this.searchHandler}/>
                                <Button className="input-group-append align-self-md-center pl-1"
                                        variant="secondary" type="submit">Submit</Button>
                            </form>
                        </div>
                        <div className='col-md-9 pr-5'>
                            <TranslationList id={this.props.location.state} search={this.state.search}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default TranslationsPage
