import React, { Component } from 'react';
import DeviationDisplay from './DeviationDisplay';

const url="http://localhost:8900/deviation";



class Deviation extends Component{
  constructor(){
    super()
    this.state={
      deviation:''
    }
  }
 
  render(){
    
    return(
      <div>
        <DeviationDisplay userData={this.state.deviation}/>
      </div>
    )
  }

  componentDidMount(){
    fetch(url,{method:'GET'})
    .then((response) => response.json())
    //.then((data) =>{console.log(data)})
    .then((data) => {this.setState({deviation:data})})
  }
}


export default Deviation;

/*if (this.state.Deviation == "1"){
  style={backgroundColor:"red"};
}*/



