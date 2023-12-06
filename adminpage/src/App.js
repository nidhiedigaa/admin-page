import logo from './logo.svg';
import './App.css';
import Invoices from './components/pageone/invoices';
import Clients from './components/pageone/clients';
import Payments from './components/pageone/payments';
import ChartDashBoard from './components/chart/chartdashboard';
import BarChart from './components/chart/barchart';
import CurlyLineChart from './components/chart/curlylinechart';
import RecentProjects from './components/pageone/recentprojects';
import Statistics from './components/statistics/salarystatistics';
import TaskStatistics from './components/statistics/taskstatistics';
import NavBar from './components/navbar/navigation';
import SideBar from './components/navbar/sidebar';
import Global from './components/navbar/global';
import {Row,Col} from "react-bootstrap"
import { BrowserRouter } from 'react-router-dom/dist/umd/react-router-dom.development';
import{Routes,Route} from "react-router-dom"
function App() {
  return (
<BrowserRouter>
<div className="App" style={{backgroundColor:"rgba(244,244,245)"}}>
      
      <Global>
    
     <Row>
    
     <Col className='col-12'> <NavBar></NavBar></Col> 
    
     <Col className="d-flex">
     <div>
        <SideBar></SideBar>
      </div>
     <div className="main-content">
      <div className="bg-white">
         <ChartDashBoard></ChartDashBoard>
       </div>
       <div className="charts">
    <div className="d-flex flex-column justify-content-center align-items-center">
    <BarChart className="barchart bg-white"></BarChart>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center">
    <CurlyLineChart className="bg-white"></CurlyLineChart>
    </div>
    </div>
       <div className="admin-page-3 ">
       <Invoices></Invoices>
       <Payments></Payments>
       <Clients></Clients>
       <RecentProjects></RecentProjects>
       </div>
       <div>
         <Statistics></Statistics>
       </div>
       <div>
         <TaskStatistics></TaskStatistics>
       </div>
      </div>
     </Col>
     </Row>
      </Global>
         
     </div>
</BrowserRouter>


  );
}

export default App;
