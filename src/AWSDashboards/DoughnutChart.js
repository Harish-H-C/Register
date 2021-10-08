import React, { useState, useEffect } from 'react';
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

const DoughnutChart = () => {
    const [deviationData,setDeviationData] = useState({});
    const chart = () => {
        let Deviation_data = [];
        axios
        .get("http://localhost:8900/deviation")
        .then(res => {
          console.log(res);
          for (const dataObj of res.data) {
            Deviation_data.push(parseInt(dataObj.Deviation));
        }
        setDeviationData({
        labels: [ 'Appointment Mismatch',
                  'Duration Mismatch',
                  'NotBilled'
                ],
            datasets: [
              {
                label: "level of thiccness",
                data: Deviation_data,
                backgroundColor: ["rgb(255, 0, 0)","rgb(255, 100, 71)","rgb(255,165,0)"],
                borderWidth: 4
              }
            ]
          });
        })
        .catch(err => {
            console.log(err);
          });
        //console.log(Deviation_data);
    };
    useEffect(() => {
        chart();
      }, []);
      return (
        <div className="App">
          <div>
            <Doughnut
              data={deviationData}
              options={{
                responsive: true,
                title: { text: "Deviation", display: true },
               
                onClick: (event, elements) => {
                  const chart = elements[0]._chart;
                  const element = chart.getElementAtEvent(event)[0];
                  const xLabel = chart.data.labels[element._index];
                  
                  // 
                  // const dataset = chart.data.datasets[element._datasetIndex];
                  // const value = dataset.data[element._index];
                  // console.log(dataset.backgroundColor[0] + " at " + xLabel + ": " + value);
                  if (xLabel === 'Appointment Mismatch' ){
                    window.location.replace('/appntmismatch')
                  }
                  else if (xLabel === 'Duration Mismatch' ){
                    window.location.replace('/durmismatch')
                  }
                  else if (xLabel === 'NotBilled' ){
                    window.location.replace('/notbilled')
                  }
                }
              }}
            />
          </div>
        </div>
      );
}

export default DoughnutChart;