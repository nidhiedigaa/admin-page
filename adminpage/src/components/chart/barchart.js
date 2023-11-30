import React from "react"
import Chart from "chart.js/auto"
import {Bar} from "react-chartjs-2"





function BarChart(props)
{
    const data={
        labels:[2006,2007,2008,2009,2010,2011,2012],
        datasets:[
        {
            label:'Total Revenue',
            data:[92,65,50,75,51,70,95],
            borderColor:[
               'rgba(255,174,66)',
               'rgba(255,174,66)',
               'rgba(255,174,66)',
               'rgba(255,174,66)',
               'rgba(255,174,66)',
               'rgba(255,174,66)',
               'rgba(255,174,66)'
            ],
            backgroundColor:[
                'rgba(255,174,66)',
                'rgba(255,174,66)',
                'rgba(255,174,66)',
                'rgba(255,174,66)',
                'rgba(255,174,66)',
                'rgba(255,174,66)',
                'rgba(255,174,66)'
                
            ]
        },
        {
            label:'Total Revenue',
            data:[85,60,35,65,35,61,90],
            borderColor:[
                'rgba(255,145,164)',
            ],
            backgroundColor:[
                'rgba(255,145,164)',
                
               
            ]
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
            beginAtZero: true,
            max: 120,
            maxTicksLimit:5,
            stepSize: 30, // Adjust this based on your desired interval
          },
          x:
        {
            grid:{display:false}
        }
        }
      }
    return (<>
    <h3 className="text-center">Total Revenue</h3>
    <Bar data={data} options={options}></Bar></>)
}


export default BarChart