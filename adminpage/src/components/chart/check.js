import React from "react"
import Chart from "chart.js/auto"
import {Line} from "react-chartjs-2"



function ChartOne(props)
{
    const data={
        labels:['JAN','FEB','MAR','APR','MAY'],
        datasets:[
            {
                label:"sales for 2020 (M)",
                data:[3,2,1,3,5],
                backgroundColor: 'rgba(75,192,192,0.2)', // Background color for the bars
                borderColor: 'rgba(75,192,192,1)', // Border color for the bars
                borderWidth: 1,
            },
            {
                label:"sales for 2020 (M)",
                data:[2,3,4,5,2]
            }
        ]
    }









    return (<>
    <Line data={data}></Line>
    </>)
}


export default ChartOne