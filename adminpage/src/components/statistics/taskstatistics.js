import React,{useState} from "react"
import {Row,Col,Alert} from "react-bootstrap"
import ProgressBar from 'react-bootstrap/ProgressBar';


function TaskStatistics(props)
{

  let[profile,setProfile]=useState([{name:"martin lewis"},{name:"lewis capaldi"}])


  function change()
  {
    setProfile([{name:"jennifer lawrence"},{name:"amily blunt"}])
  }
   return( <Row className="m-3">
        <Col className="p-3 m-3 border">
        <div>
            <h4>Statistics</h4>
            <div className="m-3">
            <ul class="list-group list-unstyled">
  <li class="list-group-item mb-1 py-4"><h6 className="d-flex justify-content-between"><span>Today Leave</span><span>4 / 65</span></h6>
  <ProgressBar variant="warning" now={20} style={{width:"90%",height:"7px"}}/>
  </li>
  <li class="list-group-item  mb-1 py-4"><h6 className="d-flex justify-content-between"><span>Pending Invoice</span><span>15 / 92</span></h6>
  
  <ProgressBar variant="warning" now={40} style={{width:"90%",height:"7px"}}/>
  </li>
  <li class="list-group-item  mb-1 py-4"><h6 className="d-flex justify-content-between"><span>Completed Projects</span><span>85 / 112</span></h6>
  <ProgressBar variant="success" now={85} style={{width:"90%",height:"7px"}}/>
  </li>
  <li class="list-group-item  mb-1 py-4"><h6 className="d-flex justify-content-between"><span>Open Tickets</span><span>190 / 212</span></h6>
  <ProgressBar variant="warning" now={90} style={{width:"90%",height:"7px"}}/>
  </li>
  <li class="list-group-item  mb-1 py-4"><h6 className="d-flex justify-content-between"><span>Closed Tickets</span><span>22 / 212</span></h6>
  <ProgressBar variant="primary" now={30} style={{width:"90%",height:"7px"}}/>
  </li>
</ul>
            </div>
        </div>
        
        
        
        </Col>
        <Col className="p-3 m-3 border">
        <div>
            <h4 className="">Task Statistics</h4>
        <div className="d-flex gap-3" style={{marginTop:"15px"}}>
            <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-center p-2 border" style={{backgroundColor:"rgba(245, 245, 245)"}}>
            <h6 >
                Total Tasks
            </h6>
            <h4>385</h4>
            </div>
            
            <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-center p-2 border" style={{backgroundColor:"rgba(245, 245, 245)"}}>
            <h6>
                Overdue Tasks
            </h6>
            <h4>19</h4>
            </div>
            
        </div>
        <div>
        <div className="progress-stacked mt-4 mb-4">
  <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width: "30%"}}>
    <div className="progress-bar bg-info fw-bold">30%</div>
  </div>
  <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width: "22%"}}>
    <div className="progress-bar bg-warning fw-bold">22%</div>
  </div>
  <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "24%"}}>
    <div className="progress-bar bg-success fw-bold">24%</div>
  </div>
  <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "21%"}}>
    <div className="progress-bar bg-danger fw-bold">21%</div>
  </div>
  <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "10%"}}>
    <div className="progress-bar bg-primary fw-bold">10%</div>
  </div>
</div>
        </div>
        <div className="mt-3">
            <ul className="list-unstyled">
                <li className="d-flex justify-content-between mt-4">
                <span>
                <i class="fa-regular fa-circle-dot" style={{color: "#0aa7eb"}}></i>
                <span className="ms-2 fw-bold">Completed Tasks</span>
                </span>
                <span>166</span>
                </li>
                <li className="d-flex justify-content-between mt-4">
                <span>
                <i class="fa-regular fa-circle-dot" style={{color: "#e7eb0a"}}></i>
                <span className="ms-2 fw-bold">Inprogress Tasks</span>
                </span>
                <span>115</span>
                </li>
                <li className="d-flex justify-content-between mt-4">
               <span>
               <i class="fa-regular fa-circle-dot" style={{color: "#0aeb37"}}></i>
                <span className="ms-2 fw-bold">On Hold Tasks</span>
               </span>
               <span>31</span>
                </li>
                <li className="d-flex justify-content-between mt-4">
                <span>
                <i class="fa-regular fa-circle-dot" style={{color: "#eb370a"}}></i>
                <span className="ms-2 fw-bold">Pending Tasks</span>
                </span>
                <span>47</span>
                </li>
                <li className="d-flex justify-content-between mt-4">
               <span>
               <i class="fa-regular fa-circle-dot" style={{color: "#0a19eb"}}></i>
                <span className="ms-2 fw-bold">Review Tasks</span>
               </span>
            <span>5</span>
                </li>
            </ul>
        </div>
        </div>
        </Col>
    <Col  className="p-4 m-3 border">
   <div className="d-flex flex-column gap-3 ">
   <div className="d-flex gap-2">
   <h4>Today Absent </h4>
   <Alert variant="danger" className="d-inline" style={{padding:"5px 8px"}}>5</Alert>
   </div>
    <div className="border border-1 p-3">
        <img src={"/profileimages/emptyprofile.jpg"} height="50px" width="70px"/>
        <span className="text-capitalize">{profile[0].name}</span>
        <h6>4 Sep 2023</h6>
        <div className="d-flex justify-content-between">
        <p style={{fontSize:"18px",opacity:"0.5"}}>Leave Date</p>
        <Alert variant="danger" className="d-inline py-0 px-1" style={{fontSize:"12px"}}>Pending</Alert>
        </div>
    </div>
    <div className="border border-1 p-3">
    <img src={"/profileimages/emptyprofile.jpg"} height="50px" width="70px"/>
    <span className="text-capitalize">{profile[1].name}</span>
    <h6>4 Sep 2023</h6>
    <div className="d-flex justify-content-between">
    <p style={{fontSize:"18px",opacity:"0.5"}}>Leave Date</p>
    <Alert variant="success" className="d-inline py-0 px-1 " style={{fontSize:"12px"}}>Approved</Alert>
    </div>
    </div>
    <div>
        <button style={{border:"none"}} className="border border-1 d-block m-auto" onClick={change}>Load More</button>
    </div>
   </div>

    </Col>
    </Row>)



}


export default TaskStatistics