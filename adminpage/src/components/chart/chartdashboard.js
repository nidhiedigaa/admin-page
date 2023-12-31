import React from "react"
import {Row,Col,Alert} from "react-bootstrap"



const data=[{number:112,name:"Projects"},{number:44,name:"Clients"},{number:37,name:"Tasks"},{number:218,name:"employees"}]

function ChartDashBoard(props)
{
    return(<>
    <Row className="mx-5 my-4 gx-3">
        <Col>
        <h2>Welcome Admin!</h2>  
        <h4 style={{opacity:"0.5"}}>Dashboard</h4>
        </Col>
    </Row>
    <Row className="gap-4 mx-5 ">
        <Col className="d-flex justify-content-between p-3 border border-2 rounded-3"><Alert variant="warning" className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{width:"60px"}}><i className="fa-solid fa-boxes-stacked fa-2xl" style={{color: "#e69119"}}></i></Alert>
        <div>
            <h3 className="ms-4">{data[0].number}</h3>
            <h5>{data[0].name}</h5>
        </div>
        </Col>
        <Col className="d-flex justify-content-between p-3 border border-2 rounded-3"> 
        <Alert style={{width:"60px"}} className="rounded-circle p-2 d-flex align-items-center justify-content-center" variant="warning"><i className="fa-solid fa-dollar-sign fa-2xl" style={{color: "#d87c13"}}></i></Alert>
        <div>
        <h3 className="ms-4">{data[1].number}</h3>
            <h5>{data[1].name}</h5>
        </div>
        </Col>
        <Col className="d-flex justify-content-between p-3 border border-2 rounded-3">
        <Alert style={{width:"60px"}} variant="warning" className="rounded-circle p-2 d-flex align-items-center justify-content-center"><i className="fa-regular fa-gem fa-2xl" style={{color: "#db7a1f"}}></i></Alert>
        <div>
        <h3 className="ms-4">{data[2].number}</h3>
            <h5>{data[2].name}</h5>
        </div>
        </Col>
        <Col className="d-flex justify-content-between p-3 border border-2 rounded-3">
        <Alert style={{width:"60px"}} variant="warning" className="rounded-circle p-2 d-flex align-items-center justify-content-center"><i className="fa-solid fa-user fa-2xl" style={{color: "#d06916"}}></i></Alert>
        <div>
        <h3 className="ms-4">{data[3].number}</h3>
            <h5>{data[3].name}</h5>
        </div>
        </Col>
    </Row>
    </>)
}


export default ChartDashBoard

