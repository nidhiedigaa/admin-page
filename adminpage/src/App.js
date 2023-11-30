import logo from './logo.svg';
import './App.css';
import Invoices from './components/pageone/invoices';
import Clients from './components/pageone/clients';
import Payments from './components/pageone/payments';

import RecentProjects from './components/pageone/recentprojects';
import ChartDashBoard from './components/chart/chartdashboard';
import BarChart from './components/chart/barchart';
import CurlyLineChart from './components/chart/curlylinechart';
import {Col,Row} from "react-bootstrap"
function App() {
  return (
    <div className="App">
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
