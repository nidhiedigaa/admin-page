import React from "react"

import {Table} from "react-bootstrap"


function Clients(props)
{
    return(<>
      <Table>
        <thead>
          <tr>
          <td colSpan={5} className="p-3 fw-bold">Clients</td>
          </tr>
        </thead>
        <tbody>
            <tr >
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
            </tr>
            <tr>
              <td> <img width="50px" height="50px" style={{borderRadius:"80px"}} src={'https://th.bing.com/th/id/R.0d4b1039996062936fdb28add2464640?rik=G5maGrKNi3eEpQ&riu=http%3a%2f%2fmedia-cache-ak0.pinimg.com%2f736x%2f67%2f34%2f76%2f67347629a481e370b42451bfc728419f.jpg&ehk=%2blCeQYVx4gSIyu3FX4f5skaUTHvXtFCK%2fvzko1G%2fodI%3d&risl=&pid=ImgRaw&r=0'} alt=""/> Barry Cuda CEO</td>
               <td>barrycuda@example.com</td>
               <td><div className="dropdown">
  <button className="btn btn-outline-secondary dropdown-toggle px-3 py-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{borderRadius:"20px"}}>
    Active
  </button>
  <ul className="dropdown-menu">
    
  </ul>
</div></td>
<td className="text-center"><a href="" style={{color:'black'}} ><i className="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
            <tr>
            <td><img width="50px" height="50px" style={{borderRadius:"80px"}} src={'https://cdn2.hubspot.net/hubfs/1716276/API/celebrities/Jennifer-Aniston.jpg'} alt=""/> Tressa Wexler Manager</td>
               <td>tressawexler@example.com</td>
               <td><div className="dropdown">
  <button className="btn btn-outline-secondary dropdown-toggle px-3 py-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{borderRadius:"20px"}}>
    Inactive
  </button>
  <ul className="dropdown-menu">
    
  </ul>
</div></td>
<td className="text-center"><a href="" style={{color:'black'}}><i className="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
            <tr>
            <td><img width="50px" height="50px" style={{borderRadius:"80px"}} src={'https://fr.web.img5.acsta.net/pictures/20/02/11/14/39/3930920.jpg'} alt=""/> Ruby Bartlett CEO</td>
               <td>rubybartlett@example.com</td>
               <td><div className="dropdown">
  <button className="btn btn-outline-secondary dropdown-toggle px-3 py-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{borderRadius:"20px"}}>
    Inactive
  </button>
  <ul className="dropdown-menu">
    
  </ul>
</div></td>
<td className="text-center"><a href="" style={{color:'black'}}><i className="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
            <tr>
            <td><img width="50px" height="50px" style={{borderRadius:"80px"}} src={'https://media.allure.com/photos/5f6f6e92fead0c52de619dca/1:1/w_1750,h_1750,c_limit/courtney-cox-lede.jpg'} alt=""/>Misty Tison Ceo</td>
               <td>mistytison@example.com</td>
               <td><div className="dropdown">
  <button className="btn btn-outline-secondary dropdown-toggle px-3 py-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{borderRadius:"20px"}}>
    Active
  </button>
  <ul className="dropdown-menu">
    
  </ul>
</div></td>
<td className="text-center"><a href="" style={{color:'black'}}><i className="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
            <tr>
            <td><img width="50px" height="50px" style={{borderRadius:"80px"}} src={'https://media.movieassets.com/static/images/items/people/profiles/500/100/david-schwimmer-0e07137e664a5aeec1151e7c89cc3d36.jpg'} alt=""/> Daniel Deacon Ceo</td>
               <td>danieldeacon@example.com</td>
               <td><div className="dropdown">
  <button className="btn btn-outline-secondary dropdown-toggle px-3 py-0" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{borderRadius:"20px"}}>
    Inactive
  </button>
  <ul className="dropdown-menu">
    
  </ul>
</div></td>
<td className="text-center"><a href="" style={{color:'black'}}><i className="fa-solid fa-ellipsis-vertical"></i></a></td>
            </tr>
        </tbody>
        <tfoot>
          <tr className="text-center">
        <td colSpan={5}>View all clients</td>
          </tr>
        </tfoot>
    </Table>
    </>)
}


export default Clients