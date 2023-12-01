import React from "react"
import {Row,Col} from "react-bootstrap"
import ProgressBar from 'react-bootstrap/ProgressBar';


function Statistics(props)
{
    return (<>
    <Row className="m-3">
        <Col xl={6} xxl={3} className="border border-2 ">
        <div className="d-flex flex-column" style={{rowGap:"10px"}}>
            <h5 className="d-flex justify-content-between">
                <span>New Employees</span>
                <span className="text-success">+10%</span>
            </h5>
            <h3>
                10
            </h3>
            <ProgressBar variant="warning" now={75} style={{width:"90%",height:"7px"}}/>
            <h6>Overall Employees <span style={{opacity:"0.5"}}>218</span></h6>
        </div>
        </Col>
        <Col xl={6} xxl={3}  className="border border-2 col-sm-6 col-md">
        <div className="d-flex flex-column" style={{rowGap:"10px"}}>
            <h5 className="d-flex justify-content-between ">
                <span>Earnings</span>
                <span className="text-success">+12.5%</span>
            </h5>
            <h3>
                $1,42,300
            </h3>
            <ProgressBar variant="warning" now={75} style={{width:"90%",height:"7px"}}/>
            <h6>Previous Month <span style={{opacity:"0.5"}}>$1,15,852</span></h6>
        </div>
        </Col>
        <Col xl={6} xxl={3} className="border border-2 col-sm-6 col-md ">
        <div className="d-flex flex-column" style={{rowGap:"10px"}}>
            <h5 className="d-flex justify-content-between ">
                <span>Expenses</span>
                <span className="text-danger">-2.8%</span>
            </h5>
            <h3>
                $8,500
            </h3>
            <ProgressBar variant="warning" now={75} style={{width:"90%",height:"7px"}}/>
            <h6>Previous Month <span style={{opacity:"0.5"}}>$7,500</span></h6>
        </div>
        </Col>
        <Col xl={6} xxl={3} className="border border-2 col-sm-6 col-md">
        <div className="d-flex flex-column" style={{rowGap:"10px"}}>
            <h5 className="d-flex justify-content-between ">
                <span>Profit</span>
                <span className="text-danger">-75%</span>
            </h5>
            <h3>
                $1,12,000
            </h3>
            <ProgressBar variant="warning" now={75} style={{width:"90%",height:"7px"}}/>
            <h6>Previous Month <span style={{opacity:"0.5"}}>$1,42,000</span></h6>
        </div>
        </Col>
    </Row>
    </>)
}

export default Statistics