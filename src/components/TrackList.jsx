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
      fetch('/tracks/')
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
        <div className="m-5">
          {tracks.map(track =>
            <TrackCard track={track} key={track.id}/>)}
        </div>
      );
    }
  }

export default TrackList;
