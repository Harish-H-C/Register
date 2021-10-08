import React from 'react';
import {Link} from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return(
        <div className="container-fluid">
            <ul className="nav nav-tabs">
                <li ><a data-toggle="tab"><Link to ="#">Dashboard</Link></a></li>
                <li><a data-toggle="tab"><Link to ="/detail/touchdown">Detailed Data</Link></a></li>
                <li><a data-toggle="tab" ><Link to = "/detail/card">CardDetails</Link></a></li>
                <li><a data-toggle="tab" ><Link to = "/detail/deviation">Mismatched Data</Link></a></li>
                <li><a data-toggle="tab" ><Link to = "/detail/sensor">Sensor Status</Link></a></li>
            </ul>
            <br/>
                
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="img-responsive">
                                <Link to="/detail/deviation"><img src="../images/o2spa1.jpg" alt=""/></Link>
                            </div>
                            <div className="caption">
                                <label>Mismatched Data Table</label>
                            </div>
                        </div>
                        
                        <div className="col-lg-6">
                        <div className="img-responsive">
                                <Link to="/detail/card"><img src="../images/o2spa1.jpg" alt=""/></Link>
                            </div>
                            <div className="caption">
                                <label>Card Details Table</label>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                    <div className="col-lg-6">
                            <div className="img-responsive">
                                <Link to="/detail/touchdown"><img src="../images/o2spa1.jpg" alt=""/></Link>
                            </div>
                            <div className="caption">
                                <label>Detailed Data Table</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="img-responsive">
                                <Link to="/detail/sensor"><img src="../images/o2spa1.jpg" alt=""/></Link>
                            </div>
                            <div className="caption">
                                <label>Sensor Status</label>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Dashboard;

//https://documentation.logianalytics.com/logiinfov12/content/resources/images/introcccharts_113.png
//https://lh3.googleusercontent.com/proxy/TAOJp8j5P04aSRgHE2DLwhcrqwnxy2SVbBCz-8S7ZhAuZQiZZDG-vGJzKh0zyBx24sMvlHXiXTiMzPQOf5QziXEb
//https://lh3.googleusercontent.com/proxy/gUlQBgg961TZ6SntCpa6Uc7RmR2isFC9xlHB_s8Pbr-MZNbNzLeoH98is31f6abdUUZMfHWoa_hFO2gFYfep66M85zRlm3qyDtNT4wbQvFgrR9riEIR3jssKtpG7jg6hk-NYULTg49zwyomM0xrh3s4
//https://d2908q01vomqb2.cloudfront.net/b6692ea5df920cad691c20319a6fffd7a4a766b8/2018/10/16/TableQuickSight9.png


                       