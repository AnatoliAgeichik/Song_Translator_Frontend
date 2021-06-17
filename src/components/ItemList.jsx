import React from 'react';

import {Button} from "react-bootstrap";

export class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count:0,
      next_page:"",
      previous_page:"",
      current_page:this.props.page,
      params:window.location.search
    };
  }

  prevPage = (e) =>{
        if (this.state.previous_page) {
            this.setState({params: this.state.previous_page.substr(this.state.previous_page.indexOf("?"))})
        }
  }

  nextPage = (e) =>{
        if (this.state.next_page) {
            this.setState({params: this.state.next_page.substr(this.state.next_page.indexOf("?"))})
        }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.params !== prevState.params){
            this.props.histroyCallaback(this.state.current_page+this.state.params)
            this.fetchData()
        }
        if (this.props.search !== prevProps.search || this.props.ordering !== prevProps.ordering){
            this.setState({params:`?page=1${this.props.ordering}&search=${this.props.search}`})
            this.fetchData()
        }
    }

  fetchData() {
    fetch(`${this.state.current_page}${this.state.params}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          data: data.results,
          count:data.count,
          previous_page:data.previous,
          next_page:data.next,
        })
        this.props.dataCallback(this.state.data);
      })
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
      return(<div className="d-flex justify-content-around pb-3">
                                    <Button className="btn-secondary" onClick={this.prevPage}>Previous</Button>
                                    <Button className="btn-secondary" onClick={this.nextPage}>next</Button>
                                </div>)
  }
}

export default ItemList;
