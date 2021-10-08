import React from 'react';

const SensorHealthDisplay = (props) => {
    const renderSensor = ({sensorData}) => {
        if(sensorData) {
            return sensorData.map((item,index) => {
                return(
                    <tr>
                        <td>{item.Id}</td>
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
           <h3>Sensor Health Status</h3>
           <div className="table-responsive">
            <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
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
                        {renderSensor(props)}
                    </tbody>
                </table>
           </div>
        </div>
    )
}

export default SensorHealthDisplay;