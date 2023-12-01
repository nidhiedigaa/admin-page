import React from "react"
import {Table,Alert,Accordion} from "react-bootstrap"
import "./pageone.css"

function Invoices(props)
{
    return(<>
    <Table className="border">
        <thead className="border border-2">
          <tr>
          <td colSpan={5} className="p-3 fw-bold" style={{fontSize:"18px",letterSpacing:"1px"}}>Invoices</td>
          </tr>
        </thead>
        <tbody>
            <tr >
                <th>Invoice ID <i className="fa-solid fa-arrow-down-long"></i></th>
                <th >Client <i className="fa-solid fa-arrow-down-long"></i></th>
                <th>Due Date <i className="fa-solid fa-arrow-down-long"></i></th>
                <th>Total <i className="fa-solid fa-arrow-down-long"></i></th>
                <th>Status <i className="fa-solid fa-arrow-down-long"></i></th>
            </tr>
            <tr>
                <td>#INV-0001</td>
                <td>Global Technologies</td>
                <td>11 Mar 2023</td>
                <td>$380</td>
                <td><Alert variant="warning" className=" d-inline fw-bold" style={{color:"orange",padding:"0 5px",fontSize:"15px"}}>Partially Paid</Alert></td>
            </tr>
            <tr>
            <td>#INV-0002</td>
            <td>Delta Infotech</td>
            <td>8 Feb 2023</td>
            <td>$500</td>
            <td><Alert variant="success" className=" d-inline fw-bold" style={{color:"green",padding:"0 5px",fontSize:"15px"}}>Paid</Alert></td>
            </tr>
            <tr>
            <td>#INV-0003</td>
            <td>Cream Inc</td>
            <td>23 Jan 2023</td>
            <td>$60</td>
            <td><Alert variant="danger" className=" d-inline fw-bold" style={{color:"maroon",padding:"0 5px",fontSize:"15px"}}>Unpaid</Alert></td>
            </tr>
        </tbody>
        <tfoot className="border border-2">
          <tr >
        <td colSpan={5} >  <Accordion defaultActiveKey={['0']}  >
      <Accordion.Item eventKey="0">
        <Accordion.Header className="text-center" ><span style={{position:"absolute",left:"40%"}}>View All Invoices</span></Accordion.Header >
        <Accordion.Body>
         <Table>
        <tbody>
            <tr>
                <td>#INV-0004</td>
                <td>Global Technologies</td>
                <td>11 Mar 2023</td>
                <td>$380</td>
                <td><Alert variant="warning" className=" d-inline fw-bold" style={{color:"orange",padding:"0 5px",fontSize:"15px"}}>Partially Paid</Alert></td>
            </tr>
            <tr>
            <td>#INV-0005</td>
            <td>Delta Infotech</td>
            <td>8 Feb 2023</td>
            <td>$500</td>
            <td><Alert variant="success" className=" d-inline fw-bold" style={{color:"green",padding:"0 5px",fontSize:"15px"}}>Paid</Alert></td>
            </tr>
            </tbody>
         </Table>
        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion></td>
          </tr>
        </tfoot>
    </Table>
    </>)
}


export default Invoices