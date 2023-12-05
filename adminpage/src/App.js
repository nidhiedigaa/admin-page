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
import SideBar from './components/sidenav/sidebar';
function App() {
  return (
    <div className="App" style={{backgroundColor:"rgba(244,244,245)"}}>
      <NavBar></NavBar>
      
     <div className='sidenav-main'>
     <div className="side-nav" style={{ width: '70px', backgroundColor: 'black' }}>
      <SideBar ></SideBar>
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
     </div>
     
 </div>


  );
}

export default App;
