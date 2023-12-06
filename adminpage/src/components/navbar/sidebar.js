// SideBar.js
import React,{useContext,useState,useReducer} from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Row,Col,Container } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { motion } from "framer-motion";
import { IoSpeedometerOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoPeopleOutline } from "react-icons/io5";
import { GoRocket } from "react-icons/go";
import { PiDetectiveLight } from "react-icons/pi";
import { BsTicket } from "react-icons/bs";
import { LuFileSpreadsheet } from "react-icons/lu";
import { HiOutlineTicket } from "react-icons/hi2";
import { RiNewspaperLine } from "react-icons/ri";
import { BiPieChartAlt2 } from "react-icons/bi";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { RxCircle } from "react-icons/rx";
import { BsPencilSquare } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2"
import { ImCross } from "react-icons/im";
import { data } from "./global";
import {NavLink} from "react-router-dom"
import './style.css'
import { intitialValue,reducer } from "./dropdownoptions";

function SideBar(props) {
  let {visibility}=useContext(data)
  let[dropdowns,dispatch]=useReducer(reducer,intitialValue)
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(visibility)
  return (
   visibility ?  <div className="main-container" style={{height:'100%',backgroundColor: 'black',position:'relative',bottom:'46px' }} >
   <motion.div animate={{ width: '70px', backgroundColor: 'black' }} className='sidenav'>
    
     <IconContext.Provider value={{color:'white',size:'2rem'}}>
     <div className="d-flex flex-column gap-3 mb-5 mt-5 align-items-center" >
       <p style={{height:'50px'}}></p>
     <IoSpeedometerOutline />
   

     <IoCubeOutline />
     </div>
    
     <div className="d-flex flex-column gap-3 mb-5 align-items-center">
     <CgProfile />
     <IoPeopleOutline />
     <GoRocket />
     <PiDetectiveLight />
     <BsTicket />
     </div>
     <div className="d-flex flex-column gap-3 mb-5 align-items-center">
     <LuFileSpreadsheet />
     <LuFileSpreadsheet />
     </div>
     <div className="d-flex flex-column gap-3 mb-5 align-items-center">
     <HiOutlineTicket />
     <RiNewspaperLine />
     <BiPieChartAlt2 />
     </div>
     <div className="d-flex flex-column gap-3 mb-5 align-items-center">
     <LiaUserGraduateSolid />
     <RxCircle />
     <BsPencilSquare />
     <HiOutlineSpeakerphone />
     <HiOutlineArrowTopRightOnSquare />
     <ImCross />
     </div>
     </IconContext.Provider>
    
   </motion.div>
 </div>:<div className="main-container text-white p-3 w-100" style={{height:'100%',backgroundColor: 'black',zIndex:'100' }} >

  
   
     <IconContext.Provider value={{color:'white',size:'20px'}}>

     <div className="d-flex flex-column row-gap-2 w-100 mb-5">
     <h6 className="align-self-start">Main</h6>
    
     
      <span className="d-flex gap-2" >   <IoSpeedometerOutline /><button className="dropdown-toggle bg-black text-white border border-0 " onClick={()=>dispatch('dashboard')}>Dashboard</button>
      
      </span>
      {dropdowns.dashboard &&   <div className="d-flex flex-column gap-3 mt-2 ms-5" >
  <div> <NavLink className="text-white admin-dashboard">Admin Dashboard</NavLink></div>
    <div ><NavLink className="text-white employee-dashboard">Employee Dashboard</NavLink></div>
  </div>}
      
      <span className="d-flex gap-2" >    <IoCubeOutline  /> <button className="dropdown-toggle bg-black text-white border border-0 " >Apps</button></span>
     
     </div>
    
     <div className="d-flex flex-column row-gap-2 mb-5  w-100">
      <h6 className="align-self-start">Employees</h6>
      <span className="d-flex gap-2" >  <CgProfile /><button className="dropdown-toggle bg-black text-white border border-0 " >Employees</button></span>
      <span className="d-flex gap-2" >   <IoPeopleOutline  /><button className="dropdown-toggle bg-black text-white border border-0 " >Clients</button></span>
      <span className="d-flex gap-2" >   <GoRocket  /><button className="dropdown-toggle bg-black text-white border border-0 " >Projects</button></span>
    
      <span className="d-flex gap-2" >    <PiDetectiveLight/> <button className="dropdown-toggle bg-black text-white border border-0 " >Leads</button></span>
      <span className="d-flex gap-2" >    <BsTicket/> <button className="dropdown-toggle bg-black text-white border border-0 " >Tickets</button></span>
     
     </div>
   <div className="d-flex flex-column row-gap-2 mb-5 w-100">
     <h6 className="align-self-start">HR</h6>
    
     
      <span className="d-flex gap-2" >  <LuFileSpreadsheet  /><button className="dropdown-toggle bg-black text-white border border-0 " >Sales</button></span>
      <span className="d-flex gap-2" > <LuFileSpreadsheet  />  <button className="dropdown-toggle bg-black text-white border border-0 " >Account</button></span>
      <span className="d-flex gap-2" > <HiOutlineTicket />   <button className="dropdown-toggle bg-black text-white border border-0 " >Payroll</button></span>
    
      <span className="d-flex gap-2" > <RiNewspaperLine  />    <button className="dropdown-toggle bg-black text-white border border-0 " >Policies</button></span>
      <span className="d-flex gap-2" >   <BiPieChartAlt2 />   <button className="dropdown-toggle bg-black text-white border border-0 " >Reports</button></span>
     
     </div>
     <div className="d-flex flex-column row-gap-2 w-100">
     <h6 className="align-self-start">HR</h6>
    
     
      <span className="d-flex gap-2" >   <LiaUserGraduateSolid /><button className="dropdown-toggle bg-black text-white border border-0 " >Performance</button></span>
      <span className="d-flex gap-2" > <RxCircle />  <button className="dropdown-toggle bg-black text-white border border-0 " >Goals</button></span>
      <span className="d-flex gap-2" > <BsPencilSquare />  <button className="dropdown-toggle bg-black text-white border border-0 " >Training</button></span>
    
      <span className="d-flex gap-2" > <HiOutlineSpeakerphone />   <button className="dropdown-toggle bg-black text-white border border-0 " >Promotion</button></span>
      <span className="d-flex gap-2" >   <ImCross />  <button className="dropdown-toggle bg-black text-white border border-0 " >Resignation</button></span>
     
     </div>
  
     </IconContext.Provider>
   
  
 </div>
  );
}

export default SideBar;
