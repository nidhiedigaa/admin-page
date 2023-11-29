import logo from './logo.svg';
import './App.css';
import Invoices from './components/pageone/invoices';
import Clients from './components/pageone/clients';
import Payments from './components/pageone/payments';
import ChartOne from "./components/chart/check"
import RecentProjects from './components/pageone/recentprojects';
function App() {
  return (
    <div className="App">
      <ChartOne></ChartOne>
    </div>
  );
}

export default App;
