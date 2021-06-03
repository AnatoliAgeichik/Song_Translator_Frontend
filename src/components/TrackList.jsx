import React from 'react';

import {TrackCard} from './TrackCard'
import {Button} from "react-bootstrap";

export class TrackList extends React.Component{
    constructor(){
      super();
      this.state={
        data:[],
        count:0,
        next_page:"",
        previous_page:"",
        current_page:"/tracks/"
      };
    }

      changePage(link){
        if (link) {
            this.state.current_page = link.substr(link.indexOf("tracks"))
            this.fetchData()
        }
    }

    prevPage = (e) =>{
        this.changePage(this.state.previous_page)
    }

    nextPage = (e) =>{
        this.changePage(this.state.next_page)
    }
    
    fetchData(){
      fetch(`${this.state.current_page}`)
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
            <div className="d-flex justify-content-around pb-3">
                <Button className="btn-secondary" onClick={this.prevPage}>Previous</Button>
                <Button className="btn-secondary" onClick={this.nextPage}>Next</Button>
            </div>
        </div>
      );
    }
  }

export default TrackList;
