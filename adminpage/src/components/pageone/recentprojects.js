import React from "react"
import {Table} from "react-bootstrap"
import ProgressBar from 'react-bootstrap/ProgressBar';

function RecentProjects(props)
{
    return(<>
    <Table className="border">
        <thead className="border border-2">
            <tr>
                <td colSpan="3" className="fw-bold" style={{fontSize:"18px",letterSpacing:"1px"}}>
                    Recent Projects
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th width="55%">Project Name <i class="fa-solid fa-arrow-down-long"></i></th>
                <th>Progress <i class="fa-solid fa-arrow-down-long"></i></th>
                <th>Action <i class="fa-solid fa-arrow-down-long"></i></th>
            </tr>
            <tr >
           <td > Office Management <br/>
            <small><b>1</b> open tasks, <b>9</b> tasks completed</small>
            </td>
            <td>

            <ProgressBar now={70}  variant="primary"  style={{height:"5px",width:"200px"}} />
            </td>
            <td className="text-center"><a href="" style={{color:'black'}} ><i class="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
            <tr >
           <td > Project Management <br/>
            <small><b>2</b> open tasks, <b>5</b> tasks completed</small>
            </td>
            <td>

            <ProgressBar now={20}  variant="primary"  style={{height:"5px",width:"200px"}} />
            </td>
            <td className="text-center"><a href="" style={{color:'black'}} ><i class="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
            <tr >
           <td > Video Calling App <br/>
            <small><b>3</b> open tasks, <b>3</b> tasks completed</small>
            </td>
            <td>

            <ProgressBar now={50}  variant="primary"  style={{height:"5px",width:"200px"}} />
            </td>
            <td className="text-center"><a href="" style={{color:'black'}} ><i class="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
           
            <tr >
           <td > Hospital Administration <br/>
            <small><b>12</b> open tasks, <b>4</b> tasks completed</small>
            </td>
            <td>

            <ProgressBar now={85}  variant="primary"  style={{height:"5px",width:"200px"}} />
            </td>
            <td className="text-center"><a href="" style={{color:'black'}} ><i class="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
        
            <tr >
           <td > Digital Marketplace <br/>
            <small><b>7</b> open tasks, <b>14</b> tasks completed</small>
            </td>
            <td>

            <ProgressBar now={100}  variant="primary"  style={{height:"5px",width:"200px"}} />
            </td>
            <td className="text-center"><a href="" style={{color:'black'}} ><i class="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
        </tbody>
        <tfoot className="border border-2">
        <tr>
            <td colSpan={5} className="text-center">View all payments</td>
          </tr>
        </tfoot>
    </Table>
    </>)
}


export default RecentProjects