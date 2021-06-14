import React from 'react';
import { Link } from "react-router-dom"
import {FaSearch} from "react-icons/fa";

import {Footer} from '../../components/Footer'
import {Header} from '../../components/Header'
import CommentList from "../../components/CommentList";
import {Dropdown, DropdownButton} from "react-bootstrap";


export class TranslationsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            search:"",
            ordering:"&ordering=language",
            title_dropdown:"Mark"

        }
    }
    historyCallback = data => {
        this.props.history.push(data)
    }

    searchHandler = e => {
       this.setState({[e.target.name]:e.target.value})
    }

    orderHandler = data =>{
        this.setState({ordering:data})
        if (data.substr(data.indexOf("=")+1) === "mark"){
            this.setState({title_dropdown:"Mark"})
        }
        else if (data.substr(data.indexOf("=")+1) === "-mark"){
            this.setState({title_dropdown:"Mark desc"})
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="min-vh-100">
                    <div className="d-flex justify-content-center">
                        <div className="pt-5 pl-5">
                            <Link className="btn btn-secondary"
                                  to={{pathname:"/addTranslation", state: this.props.location.state}}>Add Comment</Link>
                            <form className="input-group mb-3 pt-4" onSubmit={this.searchHandler}>
                                <input type="text" className="form-control" placeholder="search"
                                       name="search" onChange={this.searchHandler}/>
                                <FaSearch className="input-group-append align-self-md-center pl-1"/>
                            </form>
                            <span>Sort by</span>
                            <DropdownButton alignRight title={this.state.title_dropdown} id="dropdown-menu-align-right"
                                                variant="secondary"
                                                onSelect={this.orderHandler}>
                                    <Dropdown.Item eventKey="&ordering=track_name">Mark</Dropdown.Item>
                                    <Dropdown.Item eventKey="&ordering=-track_name">Mark desc</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className='col-md-9 pr-5'>
                            <CommentList id={this.props.location.state} search={this.state.search}
                                             ordering={this.state.ordering} histroyCallaback = {this.historyCallback}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default TranslationsPage