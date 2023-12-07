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
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { MdReportGmailerrorred } from "react-icons/md";
import { FaHandPointer } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
function SideBar(props) {
  let {visibility}=useContext(data)
  let[dropdowns,dispatch]=useReducer(reducer,intitialValue)
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(visibility)
  return (
   visibility ?  <div className="main-container-sidebar" style={{height:'100vh',backgroundColor: 'black',position:'sticky',bottom:'46px',top:'0px',overflow:'scroll',zIndex:'99' }} >
   <motion.div animate={{ width: '70px', backgroundColor: 'black' }} className='sidenav'>
    
     <IconContext.Provider value={{color:'white',size:'25px'}}>
     <div className="d-flex flex-column gap-3 mb-5 mt-5 align-items-center" >
       
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
     <div className="d-flex flex-column gap-3 mb-5 align-items-center">
     <MdOutlineAccountCircle />
     <FaKey />
     <BsPencilSquare />
     <MdReportGmailerrorred />
     <FaHandPointer />
     <RiPagesLine />
     </div>
     </IconContext.Provider>
    
   </motion.div>
 </div>:<div className="main-container-sidebar text-white p-3 w-100" style={{height:'100vh',backgroundColor: 'black',zIndex:'99',position:'sticky',overflow:'auto',top:'0px' }} >

  
   
     <IconContext.Provider value={{color:'white',size:'20px'}}>

     <div className="d-flex flex-column row-gap-2 w-100 mb-5">
     <h6 className="align-self-start">Main</h6>
    
     
      <span className="d-flex gap-2" >   <IoSpeedometerOutline /><button className="dropdown-toggle bg-black text-white border border-0 " onClick={()=>dispatch('dashboard')}>Dashboard</button>
      
      </span>
      {dropdowns.dashboard &&   <div className="d-flex flex-column gap-3 mt-2 ms-5" >
  <div> <NavLink className="text-white admin-dashboard">Admin Dashboard</NavLink></div>
    <div ><NavLink className="text-white employee-dashboard">Employee Dashboard</NavLink></div>
  </div>}
      
      <span className="d-flex gap-2" >    <IoCubeOutline  /> <button className="dropdown-toggle bg-black text-white border border-0 " onClick={()=>dispatch('app')} >Apps</button></span>
      {dropdowns.app &&   <div className="d-flex flex-column gap-3 mt-2 ms-5" >
  <div> <NavLink className="text-white admin-dashboard">App One</NavLink></div>
    <div ><NavLink className="text-white employee-dashboard">App Two</NavLink></div>
  </div>}
     </div>
    
     <div className="d-flex flex-column row-gap-2 mb-5  w-100">
      <h6 className="align-self-start">Employees</h6>
      <span className="d-flex gap-2" >  <CgProfile /><button className="dropdown-toggle bg-black text-white border border-0 " onClick={()=>dispatch('employees')}>Employees</button></span>
      {dropdowns.employees &&   <div className="d-flex flex-column gap-3 mt-2 ms-5" >
  <div> <NavLink className="text-white admin-dashboard">Employee One</NavLink></div>
    <div ><NavLink className="text-white employee-dashboard">Employee Two</NavLink></div>
  </div>}
      <span className="d-flex gap-2" >   <IoPeopleOutline  /><button className="dropdown-toggle bg-black text-white border border-0 " onClick={()=>dispatch('clients')}>Clients</button></span>
      {dropdowns.clients &&   <div className="d-flex flex-column gap-3 mt-2 ms-5" >
  <div> <NavLink className="text-white admin-dashboard">Client One</NavLink></div>
    <div ><NavLink className="text-white employee-dashboard">Client Two</NavLink></div>
  </div>}
      <span className="d-flex gap-2" >   <GoRocket  /><button className="dropdown-toggle bg-black text-white border border-0 " >Projects</button></span>
    
      <span className="d-flex gap-2" >    <PiDetectiveLight/> <button className="dropdown-toggle bg-black text-white border border-0 " >Leads</button></span>
      <span className="d-flex gap-2" >    <BsTicket/> <button className="dropdown-toggle bg-black text-white border border-0 " >Tickets</button></span>
     
     </div>
   <div className="d-flex flex-column row-gap-2 mb-5 w-100">
     <h6 className="align-self-start">HR</h6>
    
     
      <span className="d-flex gap-2" >  <LuFileSpreadsheet  /><button className="dropdown-toggle bg-black text-white border border-0 " onClick={()=>dispatch('sales')}>Sales</button></span>
      {dropdowns.sales &&   <div className="d-flex flex-column gap-3 mt-2 ms-5" >
  <div> <NavLink className="text-white admin-dashboard">Sales One</NavLink></div>
    <div ><NavLink className="text-white employee-dashboard">Sales Two</NavLink></div>
  </div>}
      <span className="d-flex gap-2" > <LuFileSpreadsheet  />  <button className="dropdown-toggle bg-black text-white border border-0 " onClick={()=>dispatch('accounts')}>Account</button></span>
      {dropdowns.accounts &&   <div className="d-flex flex-column gap-3 mt-2 ms-5" >
  <div> <NavLink className="text-white admin-dashboard">Account One</NavLink></div>
    <div ><NavLink className="text-white employee-dashboard">Account Two</NavLink></div>
  </div>}
      <span className="d-flex gap-2" > <HiOutlineTicket />   <button className="dropdown-toggle bg-black text-white border border-0 " >Payroll</button></span>
    
      <span className="d-flex gap-2" > <RiNewspaperLine  />    <button className="dropdown-toggle bg-black text-white border border-0 " >Policies</button></span>
      <span className="d-flex gap-2" >   <BiPieChartAlt2 />   <button className="dropdown-toggle bg-black text-white border border-0 " >Reports</button></span>
     
     </div>
     <div className="d-flex flex-column row-gap-2 mb-5 w-100">
     <h6 className="align-self-start">HR</h6>
    
     
      <span className="d-flex gap-2" >   <LiaUserGraduateSolid /><button className="dropdown-toggle bg-black text-white border border-0 " onClick={()=>dispatch('performance')}>Performance</button></span>
      {dropdowns.performance &&   <div className="d-flex flex-column gap-3 mt-2 ms-5" >
  <div> <NavLink className="text-white admin-dashboard">Performance One</NavLink></div>
    <div ><NavLink className="text-white employee-dashboard">Performance Two</NavLink></div>
  </div>}
      <span className="d-flex gap-2" > <RxCircle />  <button className="dropdown-toggle bg-black text-white border border-0 " >Goals</button></span>
      <span className="d-flex gap-2" > <BsPencilSquare />  <button className="dropdown-toggle bg-black text-white border border-0 " >Training</button></span>
    
      <span className="d-flex gap-2" > <HiOutlineSpeakerphone />   <button className="dropdown-toggle bg-black text-white border border-0 " >Promotion</button></span>
      <span className="d-flex gap-2" >   <ImCross />  <button className="dropdown-toggle bg-black text-white border border-0 " >Resignation</button></span>
     
     </div>
     <div className="d-flex flex-column row-gap-2 w-100">
     <h6 className="align-self-start">HR</h6>
     
      <span className="d-flex gap-2" >   <MdOutlineAccountCircle /> <button className="dropdown-toggle bg-black text-white border border-0 ">Profile</button></span>
      
      <span className="d-flex gap-2" > <FaKey /> <button className="dropdown-toggle bg-black text-white border border-0 " >Authentication</button></span>
      <span className="d-flex gap-2" >   <BsPencilSquare /> <button className="dropdown-toggle bg-black text-white border border-0 " >Elements</button></span>
    
      <span className="d-flex gap-2" >  <MdReportGmailerrorred />   <button className="dropdown-toggle bg-black text-white border border-0 " >Error Pages</button></span>
      <span className="d-flex gap-2" > <FaHandPointer />  <button className="dropdown-toggle bg-black text-white border border-0 " >Subscriptions</button></span>
      <span className="d-flex gap-2" >   <RiPagesLine /> <button className="dropdown-toggle bg-black text-white border border-0 " >Pages</button></span>
     </div>
  
     </IconContext.Provider>
   
  
 </div>
  );
}

export default SideBar;
