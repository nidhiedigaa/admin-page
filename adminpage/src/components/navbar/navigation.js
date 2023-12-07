import React,{useState,useContext} from "react"
import {Container,Row,Col,Dropdown} from "react-bootstrap"
import { FaAlignLeft } from "react-icons/fa";
import SideBar from "./sidebar";
import {data} from "./global"

function NavBar(props)
{
  let{changevisibility}=useContext(data)
    let url='https://th.bing.com/th/id/OIP.qIAbjZBvIWv4z-eqJPeqaQAAAA?w=425&h=425&rs=1&pid=ImgDetMain'
    let[notification,setNotification]=useState(1)
    let[message,setMessage]=useState(1)
   
    function increment()
    {
        setNotification(notification+1)
    }
    function messageincrement()
    {
        setMessage((pv)=>pv+1)
    }
    return (<>
    <Container fluid style={{position:'sticky',top:'0px'}}>
        <Row>
            <Col className="mt-0  text-white " style={{backgroundImage:"linear-gradient(to right, orange , RGB(255,120,120)50%)",padding:"10px",position:'relative'}}>
            <nav className="d-flex justify-content-between">
               <div className="d-flex gap-4 align-items-center">
               <img src={"./icon/iconone.png"} width="30px" height="30px"/>
              <button onClick={changevisibility} className="bg-transparent border border-0">  <FaAlignLeft color="white"  /></button>
                <h4>Dream Technologies</h4>
               </div>
               <div className="d-flex gap-3 me-3 align-items-center text-white" id="right-nav">
                <input type="search" placeholder="Search here" className="rounded-pill ps-3 text-white" style={{backgroundColor:"transparent",color:"white",border:"1px solid white"}}/>
                <i className="fa-solid fa-magnifying-glass fa-lg" style={{color: "#eff1f6",position:"absolute",right:"440px"}}></i>
                <img src={"./icon/flagone.jpg"} width="30px" height="20px" style={{marginLeft:"20px",position:"relative",left:"10px"}}/>
     
  <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-transparent text-white text-bold border border-0 d-inline'>
       English
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Kannada</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Malyalam</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
               <div style={{position:"relative"}}>
               <i class="fa-regular fa-bell fa-xl" style={{color: "#dbe3f0"}} role="button" onClick={increment}></i>
               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
    {notification}
    <span class="visually-hidden">unread messages</span>
  </span>
               </div>
                <div>
                <div style={{position:"relative"}}>
                <i class="fa-regular fa-comment fa-xl" style={{color: "#e7edf8"}} role="button" onClick={messageincrement}></i>
               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
    {message}
    <span class="visually-hidden">unread messages</span>
  </span>
               </div>
                </div>
                <img src={url} width="35px" height="35px" className="rounded-circle"/>
                <div class="btn-group">
                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className='bg-transparent text-white text-bold border border-0 d-inline'>
       Admin
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Admin-one</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Admin-two</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Admin-three</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
</div>
               </div>
            </nav>
          
            </Col>
        </Row>
    </Container>
    </>)
}


export default NavBar