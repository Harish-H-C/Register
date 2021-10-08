import React, { Component } from 'react';
import DurMisDisplay from './AppMisDisplay';

const url=" http://localhost:8900/durationmismatch"

class DurationChart extends Component {
    constructor(){
        super()
        this.state={
            'durmissed':''
        }
    }

    render(){
        return(
            <div>
               <DurMisDisplay userData={this.state.durmissed}/> 
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
        //.then((data) =>{console.log(data)})
        .then((data) => {this.setState({durmissed:data})})
      }
    
}

export default DurationChart;