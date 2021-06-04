import React from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {FiSearch} from "react-icons/fi";

export class PageMenu extends React.Component{

    onTrigger = (event) => {
        if (event.target.value) {
            this.props.parentCallback(event.target.value)
        }
        event.preventDefault()
    }


    render() {
        return(
             <div className="pt-5 pl-5">
                <Link className="btn btn-secondary" to={this.props.form_link}>{this.props.btnText}</Link>
                <form className="input-group mb-3 pt-4" onSubmit={this.onTrigger}>
                    <input type="text" className="form-control" placeholder="search"
                           name="search" onChange={this.onTrigger}/>
                    <Button className="input-group-append align-self-md-center pl-1"
                            variant="secondary" type="submit">Submit</Button>
                </form>
             </div>
        )
    }
}

export default PageMenu