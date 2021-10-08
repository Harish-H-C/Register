import React from 'react';
import '../style.css';
import {Link} from 'react-router-dom';

const CardDetailDisplay = (props) => {
    const renderUser = ({userData}) => {
        if(userData){
            return userData.map((item,index) => {
                return(
                    <tr>
                        <td>{item.Id}</td>
                        <td>{item.MAC_Address}</td>
                        <td>{item.Appointment_nr}</td>
                        <td>{item.Card_Start_Time}</td>
                        <td>{item.Card_End_Time}</td>
                        <td>{item.Card_Duration}</td>
                        <td>{item.Card_removed_Count}</td>
                        <td>{item.Card_getUp_Count}</td>
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
            <h3>CARD DETAILS TABLE</h3>
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
            <form>
            <div class="form-inline">
                <label>Th_Name</label>&nbsp;
                <input type="text" className="form-control" placeholder="Search for Th_name"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="radioinline">
                <input type="radio" name="optradio"/>&nbsp;All
                </label>&nbsp;&nbsp;&nbsp;&nbsp;
                <label className="radioinline">
                <Link to="/individual"><input type="radio" name="optradio"/>&nbsp;Individual</Link>
                </label>
            </div>
            </form>
            <br/>
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>MAC_Address</th>
                            <th>Appointment_nr</th>
                            <th>Card_Start_Time</th>
                            <th>Card_End_Time</th>
                            <th>Card_Duration</th>
                            <th>Card_removed_Count</th>
                            <th>Card_getUp_Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderUser(props)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}



export default CardDetailDisplay;



