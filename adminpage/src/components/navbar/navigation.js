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
            <Col className="mt-3  text-white p-3" style={{backgroundColor:"rgba(111,222,111)"}}>
            <nav className="d-flex justify-content-between ">
               <div className="d-flex gap-3 align-items-center">
               <img src={"./icon/icon.png"} width="30px" height="30px"/>
                <FaAlignLeft color="white" />
                <h4>Dream Technologies</h4>
               </div>
               <div className="d-flex gap-4 me-3 align-items-center text-white">
                <input type="search" placeholder="Search here" className="rounded-pill ps-3 text-white"/>
                <select>
                    <option selected>English</option>
                    <option>Kannada</option>
                    <option>Hindi</option>
                    <option>Malyalam</option>
                </select>
               <div style={{position:"relative"}}>
               <i class="fa-regular fa-bell fa-xl" style={{color: "#dbe3f0"}} role="button" onClick={increment}></i>
               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {notification}
    <span class="visually-hidden">unread messages</span>
  </span>
               </div>
                <div>
                <div style={{position:"relative"}}>
                <i class="fa-regular fa-comment fa-xl" style={{color: "#e7edf8"}} role="button" onClick={messageincrement}></i>
               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {message}
    <span class="visually-hidden">unread messages</span>
  </span>
               </div>
                </div>
                <img src={url} width="35px" height="35px" className="rounded-circle"/>
                <select >
                    <option selected>Admin</option>
                    <option></option>
                    <option></option>
                </select>
               </div>
            </nav>
            </Col>
        </Row>
    </Container>
    </>)
}


export default NavBar