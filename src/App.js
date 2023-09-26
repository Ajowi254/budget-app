import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddAccount from './components/AddAccount';
import AddLinkedAccounts from './components/AddLinkedAccounts';
import SelectBankLocation from './components/SelectBankLocation';
import Plaid from './components/Plaid';
import Home from './components/Home'; // import your Home component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add this line */}
        <Route path="/add-account" element={<AddAccount />} />
        <Route path="/add-linked-account" element={<AddLinkedAccounts />} />
        <Route path="/select-bank-location" element={<SelectBankLocation />} />
        <Route path="/plaid" element={<Plaid />} />
      </Routes>
    </Router>
  );
}

export default App;
