import {Line} from "react-chartjs-2"
import React from "react"

function LineChart(props)
{

    const data={
        labels:['jan','feb','mar','apr','may'],
        datasets:[
            {
                label:'sales for 2020 in (M)',
                data:[3,2,2,1,5]
            }
        ]
    }
    const options={
        title:{
            display:true,
            text:'Line Chart'
        },
        scales:{
            yAxes:[
                {
                    ticks:
                    {
                        min:0,
                        max:6,
                        stepSize:1
                    }
                }
            ]
        }
    }
    return(<>
    <div>
        <Line data={data}></Line>
    </div>
    </>)
}

export default LineChart