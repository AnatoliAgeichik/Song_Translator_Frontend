import React from 'react';

import { TranslationCard } from './TranslationCard'
import {Button} from "react-bootstrap";

export class TranslationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      count:0,
      next_page:"",
      previous_page:"",
      current_page:`/tracks/${this.props.id}/translations/?page=1`

    };
  }

  changePage(link){
        if (link) {
            console.log(this.state.current_page)
            this.state.current_page = link.substr(link.indexOf("/tracks"))
            console.log(this.state.current_page)
            this.fetchData()
        }
    }

    prevPage = (e) =>{
        this.changePage(this.state.previous_page)
    }

    nextPage = (e) =>{
        this.changePage(this.state.next_page)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.search !== prevProps.search){
            this.setState({current_page:`/tracks/${this.props.id}/translations/?page=1`})
            this.fetchData()
        }
    }

  fetchData() {
    fetch(`${this.state.current_page}&search=${this.props.search}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          data: data.results,
          count:data.count,
          next_page:data.next,
          previous_page:data.previous
        });
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const translations = this.state.data;
    return (
      <div className="m-5">
        {translations.map(translation =>
          <TranslationCard translation={translation} key={translation.id}/>)}
          <div className="d-flex justify-content-around pb-3">
                <Button className="btn-secondary" onClick={this.prevPage}>Previous</Button>
                <Button className="btn-secondary" onClick={this.nextPage}>Next</Button>
          </div>
      </div>
    );
  }
}

export default TranslationList;
