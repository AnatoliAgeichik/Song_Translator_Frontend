import React from 'react';
import {SingerCard} from './SingerCard'


export class SingerList extends React.Component{
    constructor(){
        super();
        this.state={
          data:[],
          count:0,
          next_page:"",
          previous_page:""
        };
    }

    fetchData(page_numb=1){
        fetch(`/singers/?page=${page_numb}`)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
            data:data.results,
            count:data.count,
            next_page:data.next,
            previous_page:data.previous
            });
            console.log(localStorage.getItem("token"))
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
