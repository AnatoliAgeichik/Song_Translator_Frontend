import React from "react";
import {Link} from "react-router-dom";
import {FaSearch} from "react-icons/fa";

export class PageMenu extends React.Component{

    onTrigger = (event) => {
        this.props.parentCallback(event.target.value)
        event.preventDefault()
    }


    render() {
        return(
             <div>
                <Link className="btn btn-secondary" to={this.props.form_link}>{this.props.btnText}</Link>
                <form className="input-group mb-3 pt-4" onSubmit={this.onTrigger}>
                    <input type="text" className="form-control" placeholder="search"
                           name="search" onChange={this.onTrigger}/>
                    <FaSearch className="input-group-append align-self-md-center pl-1"/>
                </form>
             </div>
        )
    }
}

export default PageMenu