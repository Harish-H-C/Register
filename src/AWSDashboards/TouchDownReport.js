import React, { Component } from 'react';
import TouchDownDisplay from './TouchDownDisplay';

const url="http://localhost:8900/table";

class TouchDown extends Component{
  constructor(){
    super()
    this.state={
      touchdown:''
    }
  }

  render(){
    return(
      <div>
        <TouchDownDisplay userData={this.state.touchdown}/>
      </div>
    )
  }

  componentDidMount(){
    fetch(url,{method:'GET'})
    .then((response) => response.json())
    //.then((data) =>{console.log(data)})
    .then((data) => {this.setState({touchdown:data})})
  }
}


export default TouchDown;







//<TouchDownDisplay userData={this.state.touchdown}/>