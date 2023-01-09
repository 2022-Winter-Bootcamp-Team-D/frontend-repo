import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import CustomerRegister from "./pages/CustomerRegister/CustomeRegister";
// import StoreRegister from "./pages/StoreRegister/StoreRegister";
//import WaitingList from "./pages/WaitingList/WaitingList";
//import Calender from './components/WaitingList/Calender';
import StoreRegister from './pages/StoreRegister/StoreRegister';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StoreRegister/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
