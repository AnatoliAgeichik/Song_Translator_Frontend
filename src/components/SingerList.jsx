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
        fetch('/singers/')
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
        <div className="m-5">
            {singers.map(singer =>
            <SingerCard singer={singer} key={singer.id}/>
            )}
        </div>
        );
    }
}

export default SingerList;
