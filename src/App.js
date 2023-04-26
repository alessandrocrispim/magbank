import { useState } from "react";
import { BrowserRouter as Router ,Routes,  Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import Home from './views/Home';
import Login from './views/Login'
import Dashboard from "./views/Dashboard";



function App() {

  const [showModal, setShowModal] = useState(false)

  return (
    <Router>
      <Navigation handleCreatAcc={() => setShowModal(true)} />
      <Routes>
        <Route
          path="/"
          element={<Home handleClick={() => setShowModal(true)} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </Router>
  );
}

export default App;
