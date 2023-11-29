import React from "react"
import "./pageone.css"
import {Table} from "react-bootstrap"

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
              <th>Invoice ID <i class="fa-solid fa-arrow-down-long"></i></th>
              <th>Client <i class="fa-solid fa-arrow-down-long"></i></th>
              <th>Payment Type <i class="fa-solid fa-arrow-down-long"></i></th>
              <th>Paid Date <i class="fa-solid fa-arrow-down-long"></i></th>
              <th>Paid Amount <i class="fa-solid fa-arrow-down-long"></i></th>
            </tr>
            <tr>
            <td>#INV-0001</td>
            <td>Global Technologies</td>
            <td>Paypal</td>
            <td>11 Mar 2023</td>
            <td>$380</td>
            </tr>
            <tr>
            <td>#INV-0002</td>
            <td>Delta Infotech</td>
            <td>Paypal</td>
            <td>8 Feb 2023</td>
            <td>$500</td>
            </tr>
            <tr>
            <td>#INV-0003</td>
            <td>Cream Inc</td>
            <td>Paypal</td>
            <td>23 Jan 2023</td>
            <td>$60</td>
            </tr>
        </tbody>
        <tfoot className="border border-2">
          <tr>
            <td colSpan={5} className="text-center">View all payments</td>
          </tr>
        </tfoot>
    </Table>
    </>)
}


export default Payments