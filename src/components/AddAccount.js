import React from 'react';
import { Link } from 'react-router-dom';

function AddAccount() {
  return (
    <div>
      <h1>Add Account</h1>
      <Link to="/add-linked-account">Linked</Link>
      <Link to="/add-unlinked-account">Unlinked</Link>
    </div>
  );
}

export default AddAccount;
