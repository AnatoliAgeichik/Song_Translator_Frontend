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
    fetch(`http://127.0.0.1:8000/api/tracks/${this.props.id}/translations/`)
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
      <div class="m-5">
        {translations.map(translation =>
          <TranslationCard translation={translation} />)}
      </div>
    );
  }
}

export default TranslationList;
