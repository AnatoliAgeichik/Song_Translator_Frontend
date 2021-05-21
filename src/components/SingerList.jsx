import React from 'react';


export class SingerList extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        };
}

fetchData(){
    fetch('http://127.0.0.1:8000/api/singers/')
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
    const singers=this.state.data;
    ;
    
    return (
        <div class="offset-md-3">
            {singers.map(singer => 
                <div class="card text-center" style={{ width: "48rem" }}>
                <img class="card-img-top" src="..." alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">{singer.name}</h5>
                  <p class="card-text">pass</p>
                </div>
                </div> )}
        </div>
    );
}

}

export default SingerList;