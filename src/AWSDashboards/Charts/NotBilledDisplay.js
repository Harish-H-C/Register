import React from 'react';
import {Link} from 'react-router-dom';

const NotBilledDisplay = (props) => {
    const renderNoBilled = ({userData}) => {
        if(userData){
            return userData.map((item,index) => {
                return(
                    <tr>
                        <td>{index}</td>
                        <td>{item.MAC_Address}</td>
                        <td>{item.Start_Time}</td>
                        <td>{item.End_Time}</td>
                        <td>{item.Duration}</td>
                        <td>{item.Deviation}</td>
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
            <h3>BED OCCUPANCY TABLE</h3>
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
                <select className="locationDropDown">
                <option>----Start_Date-----</option>
                </select>
                &nbsp;
                <select className="locationDropDown">
                <option>----End_Date-----</option>
                </select>
            </div>
            <label className="radioinline">
            <Link to="/"><input type="radio" name="optradio"/>&nbsp;BED</Link>
                </label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="radioinline">
                <Link to="/"><input type="radio" name="optradio"/>&nbsp;Chair</Link>
                </label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="radioinline">
                <input type="radio" name="optradio"/>&nbsp;Both
                </label>
            <br/>
            <div class="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Country</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Area</th>
                            <th>Room</th>
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
                        {renderNoBilled(props)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NotBilledDisplay;