import React, { Component } from 'react';
import NotBilledDisplay from './NotBilledDisplay';

const url=" http://localhost:8900/notbilled"

class NotBilledChart extends Component {
    constructor(){
        super()
        this.state={
            'notbilled':''
        }
    }

    render(){
        return(
            <div>
              <NotBilledDisplay userData={this.state.notbilled}/> 
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
        //.then((data) =>{console.log(data)})
        .then((data) => {this.setState({notbilled:data})})
      }
    
}

export default NotBilledChart;