import React from 'react';


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
    ;
    
    return (
        <div class="offset-md-3">
          {tracks.map(track =>
 <div class="card text-center" style={{ width: "48rem" }}>
 <div class="card-body">
   <h5 class="card-title">{track.name}</h5>
   <h6 class="card-subtitle text-muted">{track.singer}</h6>
   <p class="card-text">{track.text}</p>
   <a href="#" class="btn btn-primary">Go somewhere</a>
 </div>
</div>)}
        </div>
    );
}

}

export default TrackList;