import React, { Component } from 'react';
import CardDetailDisplay from './CardDetailDisplay';

const url="http://localhost:8900/card";

class CardDetails extends Component{
  constructor(){
    super()
    this.state={
      carddetails:''
    }
  }

  render(){
    return(
      <div>
        <CardDetailDisplay userData={this.state.carddetails}/>
      </div>
    )
  }

  componentDidMount(){
    fetch(url,{method:'GET'})
    .then((response) => response.json())
    //.then((data) =>{console.log(data)})
    .then((data) => {this.setState({carddetails:data})})
  }
}


export default CardDetails;



