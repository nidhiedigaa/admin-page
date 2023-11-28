import logo from './logo.svg';
// import './App.css';
import Invoices from './components/pageone/invoices';
import Clients from './components/pageone/clients';
function App() {
  return (
    <div className="App">
      <Invoices></Invoices>
      <Clients></Clients>
    </div>
  );
}

export default App;
