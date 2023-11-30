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


function App() {
  return (
    <div className="App">
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
      <div className="charts">
<div className="d-flex flex-column justify-content-center align-items-center">
<BarChart className="barchart"></BarChart>
</div>
 <div className="d-flex flex-column justify-content-center align-items-center">
 <CurlyLineChart></CurlyLineChart>
 </div>
 </div>
 </div>


  );
}

export default App;
