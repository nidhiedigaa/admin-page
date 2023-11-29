import React from "react"

import {Table} from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';
const styles={
  whiteSpace:"pre"
}



function Clients(props)
{
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
            <tr>
              <td style={styles}> <img width="50px" height="50px" style={{borderRadius:"80px"}} src={'profileimages/matt.jpg'} alt=""/>  Barry Cuda CEO</td>
               <td>barrycuda@example.com</td>
               <td><Dropdown>
      <Dropdown.Toggle className="btn btn-outline-secondary px-3 py-0" as="button" id="dropdown-basic" style={{borderRadius:"20px"}}>
      <i className="fa-regular fa-circle-dot" style={{color: "#0eeb0a"}}></i> Active
      </Dropdown.Toggle>

      <Dropdown.Menu>
       
        <Dropdown.Item href="#/action-2">Active</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Inactive</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></td>
<td className="text-center"><a href="" style={{color:'black'}} ><i className="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
            <tr>
            <td style={styles}><img width="50px" height="50px" style={{borderRadius:"80px"}} src={'profileimages/jen.jpg'} alt=""/>  Tressa Wexler Manager</td>
               <td>tressawexler@example.com</td>
               <td><Dropdown>
      <Dropdown.Toggle className="btn btn-outline-secondary px-3 py-0" as="button" id="dropdown-basic" style={{borderRadius:"20px"}}>
      <i className="fa-regular fa-circle-dot" style={{color: "#eb0a20"}}></i> Inactive
      </Dropdown.Toggle>

      <Dropdown.Menu>
       
        <Dropdown.Item href="#/action-2">Active</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Inactive</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></td>
<td className="text-center"><a href="" style={{color:'black'}}><i className="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
            <tr>
            <td style={styles}><img width="50px" height="50px" style={{borderRadius:"80px"}} src={'profileimages/lisa.jpg'} alt=""/>  Ruby Bartlett CEO</td>
               <td>rubybartlett@example.com</td>
               <td><Dropdown>
      <Dropdown.Toggle className="btn btn-outline-secondary px-3 py-0" as="button" id="dropdown-basic" style={{borderRadius:"20px"}}>
      <i className="fa-regular fa-circle-dot" style={{color: "#eb0a20"}}></i> Inactive
      </Dropdown.Toggle>

      <Dropdown.Menu>
       
        <Dropdown.Item href="#/action-2">Active</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Inactive</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></td>
<td className="text-center"><a href="" style={{color:'black'}}><i className="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
            <tr>
            <td><img width="50px" height="50px" style={{borderRadius:"80px"}} src={'profileimages/court.jpg'} alt=""/>  Misty Tison Ceo</td>
               <td>mistytison@example.com</td>
               <td><Dropdown>
      <Dropdown.Toggle className="btn btn-outline-secondary px-3 py-0" as="button" id="dropdown-basic" style={{borderRadius:"20px"}}>
      <i className="fa-regular fa-circle-dot" style={{color: "#0eeb0a"}}></i> Active
      </Dropdown.Toggle>

      <Dropdown.Menu>
       
        <Dropdown.Item href="#/action-2">Active</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Inactive</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></td>
<td className="text-center"><a href="" style={{color:'black'}}><i className="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
            <tr>
            <td><img width="50px" height="50px" style={{borderRadius:"80px"}} src={'/profileimages/david.jpg'} alt=""/> Daniel Deacon Ceo</td>
               <td>danieldeacon@example.com</td>
               <td><Dropdown>
      <Dropdown.Toggle className="btn btn-outline-secondary px-3 py-0" as="button" id="dropdown-basic" style={{borderRadius:"20px"}}>
      <i className="fa-regular fa-circle-dot" style={{color: "#eb0a20"}}></i> Inactive
      </Dropdown.Toggle>

      <Dropdown.Menu>
       
        <Dropdown.Item href="#/action-2">Active</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Inactive</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></td>
<td className="text-center"><a href="" style={{color:'black'}}><i className="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
        </tbody>
        <tfoot className="border border-2">
          <tr className="text-center">
        <td colSpan={5}>View all clients</td>
          </tr>
        </tfoot>
    </Table>
    </>)
}


export default Clients