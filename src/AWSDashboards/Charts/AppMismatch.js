import React, { Component } from 'react';
import AppMisDisplay from './AppMisDisplay';

const url=" http://localhost:8900/appmismatch"

class AppointmentChart extends Component {
    constructor(){
        super()
        this.state={
            'appmissed':''
        }
    }

    render(){
        return(
            <div>
               <AppMisDisplay userData={this.state.appmissed}/> 
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((response) => response.json())
        //.then((data) =>{console.log(data)})
        .then((data) => {this.setState({appmissed:data})})
      }
    
}

export default AppointmentChart;