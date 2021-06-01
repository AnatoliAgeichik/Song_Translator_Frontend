import React from 'react';

import { TranslationCard } from './TranslationCard'

export class TranslationList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  fetchData() {
    fetch(`/tracks/${this.props.id}/translations/`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          data: data
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
