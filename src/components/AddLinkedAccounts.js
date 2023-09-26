import React from 'react';
import { Link } from 'react-router-dom';

function AddLinkedAccounts() {
  return (
    <div>
      <h1>Add Linked Accounts</h1>
      <Link to="/select-bank-location">Add Connection</Link>
    </div>
  );
}

export default AddLinkedAccounts;
