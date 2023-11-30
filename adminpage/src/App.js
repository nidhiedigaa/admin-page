import logo from './logo.svg';
import './App.css';
import Invoices from './components/pageone/invoices';
import Clients from './components/pageone/clients';
import Payments from './components/pageone/payments';

import RecentProjects from './components/pageone/recentprojects';
import ChartDashBoard from './components/chart/chartdashboard';
import BarChart from './components/chart/barchart';
import CurlyLineChart from './components/chart/curlylinechart';
function App() {
  return (
    <div className="App">
      <BarChart></BarChart>
      <CurlyLineChart></CurlyLineChart>
    </div>
  );
}

export default App;
