import React from 'react';
import { Redirect } from 'react-router-dom';
import DoughnutChart from './DoughnutChart';



const DeviationDisplay = (props) => {

    
    console.log("hi",)   
    const renderUser = ({userData}) => {

        if(userData){
            return userData.map((item,index) => {
                console.log("hello",item.Deviation)
                
                return(
                    <tr>
                        <td>{item.Id}</td>
                        <td>{item.MAC_Address}</td>
                        <td>{item.Start_Time}</td>
                        <td>{item.End_Time}</td>
                        <td>{item.Duration}</td>
                        <td style={{'backgroundColor': item.Deviation === '1' ? 'red' : item.Deviation === '2' ? 'orange': item.Deviation === '3' ? 'yellow' : 'black'}}>{item.Deviation}</td>
                        <td>{item.Appointment_nr}</td>
                        <td>{item.Video_name}</td>
                        <td>{item.ther_id}</td>
                        <td>{item.ther_name}</td>
                        <td>{item.Appointment_Status}</td>
                        <td>{item.Wifi_Staus}</td>
                    </tr>
                )
            })
        }
    }
    return(
        <div>
            <center>
                <h2>SPA DASHBOARD</h2>
                <br/>
            </center>
            <h3>Deviation Table</h3>
            <div className="col-sm-8">
                <div className="locationSelector">
                <select className="locationDropDown">
                <option>----SELECT COUNTRY-----</option>
                </select>
                &nbsp;
                <select className="locationDropDown">
                <option>----SELECT STATE-----</option>
                </select>
                &nbsp;
                <select className="locationDropDown">
                <option>----SELECT CITY-----</option>
                </select>
                &nbsp;
                <select className="locationDropDown">
                <option>----SELECT AREA-----</option>
                </select>
                &nbsp;
                <br/>
                <br/>
                <select className="locationDropDown">
                <option>----Start_Date-----</option>
                </select>
                &nbsp;
                <select className="locationDropDown">
                <option>----End_Date-----</option>
                </select>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>MAC_Address</th>
                                <th>Start_Time</th>
                                <th>End_Time</th>
                                <th>Duration</th>
                                <th>Deviation</th>
                                <th>Appointment_nr</th>
                                <th>Video_name</th>
                                <th>ther_id</th>
                                <th>ther_name</th>
                                <th>Appointment_Status</th>
                                <th>Wifi_Staus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderUser(props)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="chart">
                < DoughnutChart />
                </div>
            </div>
        </div>
    )
}



export default DeviationDisplay;


//<td style={{backgroundColor:"red"}}>{item.Deviation}</td>