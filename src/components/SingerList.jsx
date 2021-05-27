import React from 'react';
import {SingerCard} from './SingerCard'


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
        return (
        <div class="m-5">
            {singers.map(singer =>
            <SingerCard singer={singer}/>
            )}
        </div>
        );
    }
}

export default SingerList;
