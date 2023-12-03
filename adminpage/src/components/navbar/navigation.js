import React,{useState} from "react"
import {Container,Row,Col} from "react-bootstrap"
import { FaAlignLeft } from "react-icons/fa";



function NavBar(props)
{
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
    <Container fluid>
        <Row>
            <Col className="mt-3  text-white " style={{backgroundImage:"linear-gradient(to right, orange , RGB(255,120,120)50%)",padding:"10px"}}>
            <nav className="d-flex justify-content-between">
               <div className="d-flex gap-4 align-items-center">
               <img src={"./icon/iconone.png"} width="30px" height="30px"/>
                <FaAlignLeft color="white" />
                <h4>Dream Technologies</h4>
               </div>
               <div className="d-flex gap-3 me-3 align-items-center text-white" id="right-nav">
                <input type="search" placeholder="Search here" className="rounded-pill ps-3 text-white" style={{backgroundColor:"transparent",color:"white",border:"1px solid white"}}/>
                <i className="fa-solid fa-magnifying-glass fa-lg" style={{color: "#eff1f6",position:"absolute",right:"440px"}}></i>
                <img src={"./icon/flagone.jpg"} width="30px" height="20px" style={{marginLeft:"20px",position:"relative",left:"10px"}}/>
                <button class="btn btn-secondary  dropdown-toggle bg-transparent text-white text-bold border border-0 btn-md" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
    English
  </button>
  <ul class="dropdown-menu">
<li>Kannada</li>
<li>Hindi</li>
<li>Malyalam</li>
  </ul>
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
  <button class="btn btn-secondary  dropdown-toggle bg-transparent text-white text-bold border border-0 btn-md" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
    Admin
  </button>
  <ul class="dropdown-menu">
<li></li>
  </ul>
</div>
               </div>
            </nav>
            </Col>
        </Row>
    </Container>
    </>)
}


export default NavBar