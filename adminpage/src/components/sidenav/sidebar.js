// SideBar.js
import React from "react";
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
// import "./SideBar.css"; // Assuming you have a separate CSS file

function SideBar(props) {
  return (
    <div className="main-container" >
      <motion.div animate={{ width: '70px', backgroundColor: 'black' }} className='sidenav'>
        {/* Add content or additional components inside the sidebar if needed */}
        <IconContext.Provider value={{color:'white',size:'2rem'}}>
        <div className="d-flex flex-column gap-3 mb-5 mt-5 align-items-center">
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
        </div>
        </IconContext.Provider>
       
      </motion.div>
    </div>
  );
}

export default SideBar;
