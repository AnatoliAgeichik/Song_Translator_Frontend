import React from 'react';

import {TrackCard} from './TrackCard'

export class TrackList extends React.Component{
    constructor(){
      super();
      this.state={
        data:[],
        count:0,
        next_page:"",
        previous_page:""
      };
    }
    
    fetchData(){
      fetch('/tracks/')
        .then(response=>response.json())
        .then((data)=>{
          this.setState({
            data:data.results,
            count:data.count,
            next_page:data.next,
            previous_page:data.previous
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
