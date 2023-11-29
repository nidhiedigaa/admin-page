import logo from './logo.svg';
import './App.css';
import Invoices from './components/pageone/invoices';
import Clients from './components/pageone/clients';
import Payments from './components/pageone/payments';
import LineChart from './components/chart/check';
import RecentProjects from './components/pageone/recentprojects';
function App() {
  return (
    <div className="App">
      <div className="admin-page-3 ">
      <Invoices></Invoices>
      <Payments></Payments>
      <Clients></Clients>
      <RecentProjects></RecentProjects>
      <LineChart></LineChart>
      </div>
    </div>
  );
}

export default App;
