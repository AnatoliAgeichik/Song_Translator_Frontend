import React from 'react';

import { TranslationCard } from './TranslationCard'

export class TranslationList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      count:0,
      next_page:"",
      previous_page:""
    };
  }

  fetchData() {
    fetch(`/tracks/${this.props.id}/translations/`)
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
      </div>
    );
  }
}

export default TranslationList;
