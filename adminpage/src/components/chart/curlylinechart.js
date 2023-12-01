import React from "react"
import Chart from "chart.js/auto"
import {Line} from "react-chartjs-2"
import datas from "./linechartdata.json"


function CurlyLineChart(props)
{

  const[dataone,datatwo]=datas

    const data={
        labels:[2006,2007,2008,2009,2010,2011,2012],
        datasets:[
            {
                label:"sales overview",
                data:dataone,
                borderColor:
                'rgba(255,174,66)'
                 ,
                 backgroundColor:
                 'rgba(255,174,66)',
                     cubicInterpolationMode:"monotone",
                     pointRadius:0,
                     borderWidth:6
                 
            },
            {
                label:'sales overview',
                data:datatwo,
                borderColor:'rgba(255,145,164)',
                backgroundColor:'rgba(255,145,164)',
                cubicInterpolationMode:"monotone",
                pointRadius:0,
                borderWidth:6
            }
        ]
    }


    const options = {
        plugins: {
          title: {
            display: true,
            
          }
        },
        scales: {
          y: {
            begindAtZero:true,
            min:20,
            max:120,
           ticks:{ min:20,
            max: 120,
            stepSize:20, // Adjust this based on your desired interval
          }},
          x:
        {
            grid:{display:false}
        }
        }
      }
    return (<>
    <div style={{width:"95%"}} className="border border-1 p-3" >
        <h3 className="text-center">Sales Overview</h3>
    <Line data={data} options={options}></Line>
    </div>
    </>)
}


export default CurlyLineChart