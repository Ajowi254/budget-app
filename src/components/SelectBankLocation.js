import React from 'react';
import { Link } from 'react-router-dom';

function SelectBankLocation() {
  return (
    <div>
      <h1>Select Bank Location</h1>
      <Link to="/plaid">North America</Link>
      <Link to="/plaid">Europe</Link>
    </div>
  );
}

export default SelectBankLocation;
