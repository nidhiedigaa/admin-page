import React,{useState} from "react"

import {Table,Accordion} from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';
import details from "./clientdata.json"





function Clients(props)
{
let[userone,setuserone]=useState('Active')
let[usertwo,setusertwo]=useState('Active')
let[userthree,setuserthree]=useState('Active')
let[userfour,setuserfour]=useState('Active')
let[userfive,setuserfive]=useState('Active')
let statusdata=[userone,usertwo,userthree,userfour,userfive]
let handlerdata=[changeuserone,changeusertwo,changeuserthree,changeuserfour,changeuserfive]
 function changeuserone(value)
 {
      value==='Active'?setuserone('Active'):setuserone('Inactive')
 }
 function changeusertwo(value)
 {
      value==='Active'?setusertwo('Active'):setusertwo('Inactive')
 }
 function changeuserthree(value)
 {
      value==='Active'?setuserthree('Active'):setuserthree('Inactive')
 }
 function changeuserfour(value)
 {
      value==='Active'?setuserfour('Active'):setuserfour('Inactive')
 }
 function changeuserfive(value)
 {
      value==='Active'?setuserfive('Active'):setuserfive('Inactive')
 }
  
    return(<>
      <Table className="border">
        <thead className="border border-2">
          <tr>
          <td colSpan={5} className="p-3 fw-bold" style={{fontSize:"18px",letterSpacing:"1px"}}>Clients</td>
          </tr>
        </thead>
        <tbody>
            <tr >
            <th>Name <i className="fa-solid fa-arrow-down-long"></i></th>
            <th>Email <i className="fa-solid fa-arrow-down-long"></i></th>
            <th>Status <i className="fa-solid fa-arrow-down-long"></i></th>
            <th>Action <i className="fa-solid fa-arrow-down-long"></i></th>
            </tr>
           {
            details.map((ele,ind,arr)=>
            {
              return( <tr key={ind}>
                <td><img width="50px" height="50px" style={{borderRadius:"80px"}} src={ele.image} alt=""/> {ele.name}</td>
                   <td>{ele.email}</td>
                   <td><Dropdown>
          <Dropdown.Toggle className="btn btn-outline-secondary px-3 py-0" as="button" id="dropdown-basic" style={{borderRadius:"20px"}}>
          {statusdata[ind]==='Active'?<i className="fa-regular fa-circle-dot" style={{color: "#0eeb0a"}}></i>:<i className="fa-regular fa-circle-dot" style={{color: "#eb0a20"}}></i>} {statusdata[ind]}
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
           
            <Dropdown.Item href="#/action-2" onClick={()=>handlerdata[ind]('Active')}>Active</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={()=>handlerdata[ind]('Inactive')}>Inactive</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown></td>
    <td className="text-center"><a href="/" style={{color:'black'}}><i className="fa-solid fa-ellipsis-vertical"></i></a></td>
                </tr>)
            })
           }
          
        </tbody>
        <tfoot className="border border-2">
          <tr className="text-center">
        <td colSpan={5}><Accordion defaultActiveKey={['0']}  >
      <Accordion.Item eventKey="0">
        <Accordion.Header className="text-center" ><span style={{position:"absolute",left:"40%"}}>View All Clients</span></Accordion.Header >
        <Accordion.Body>
         <Table style={{width:"100%"}}>
    
         </Table>
        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion></td>
          </tr>
        </tfoot>
    </Table>
    </>)
}


export default Clients