import React from "react"
import "./pageone.css"
import {Table,Accordion} from "react-bootstrap"
import details from "./paymentdata.json"
function Payments(props)
{
    return(<>
     <Table className="border">
        <thead className="border border-2">
          <tr>
          <td colSpan={5} className="p-3 fw-bolder" style={{fontSize:"18px",letterSpacing:"1px"}}>Payments</td>
          </tr>
        </thead>
        <tbody>
            <tr >
              <th>Invoice ID <i className="fa-solid fa-arrow-down-long"></i></th>
              <th>Client <i className="fa-solid fa-arrow-down-long"></i></th>
              <th>Payment Type <i className="fa-solid fa-arrow-down-long"></i></th>
              <th>Paid Date <i className="fa-solid fa-arrow-down-long"></i></th>
              <th>Paid Amount <i className="fa-solid fa-arrow-down-long"></i></th>
            </tr>
          {details.map((ele,ind,arr)=>
          {
            return (<tr key={ind} className="text-capitalize">
              <td >{ele.invoice}</td>
              <td >{ele.client}</td>
              <td >{ele.payment}</td>
              <td >{ele.date}</td>
              <td >{ele.amount}</td>
              </tr>)
          })}
        </tbody>
        <tfoot className="border border-2">
          <tr>
            <td colSpan={5} className="text-center">
            <Accordion defaultActiveKey={['0']}  >
      <Accordion.Item eventKey="0">
        <Accordion.Header ><span style={{position:"absolute",left:"40%"}}>View All Invoices</span></Accordion.Header >
        <Accordion.Body>
       
        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion>
            </td>
          </tr>
        </tfoot>
    </Table>
    </>)
}


export default Payments