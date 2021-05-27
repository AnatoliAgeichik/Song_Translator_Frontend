import React from 'react';

import {TrackCard} from './TrackCard'

export class TrackList extends React.Component{
    constructor(){
      super();
      this.state={
        data:[]
      };
    }
    
    fetchData(){
      fetch('http://127.0.0.1:8000/api/tracks/')
        .then(response=>response.json())
        .then((data)=>{
          this.setState({
            data:data
          });
        });
    }
    
    componentDidMount(){
      this.fetchData();
    }
    
    render(){
      const tracks=this.state.data;
      return (
        <div class="m-5">
          {tracks.map(track =>
            <TrackCard track={track}/>)}
        </div>
      );
    }
  }

export default TrackList;
