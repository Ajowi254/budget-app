import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';

function Plaid() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Fetch link token from server
    fetch('http://localhost:3001/get_link_token')
      .then(response => response.json())
      .then(data => setToken(data.link_token));
  }, []);

  const onSuccess = (public_token, metadata) => {
    // send public_token to your app server.
    console.log('public_token: ', public_token);
    console.log('metadata: ', metadata);
  };

  const onExit = (err, metadata) => {
    // handle the case when your user exits Link
    console.log('onExit error: ', err);
    console.log('onExit metadata: ', metadata);
  };

  const config = {
    token,
    onSuccess,
    onExit,
    // ...
  };

  const { open, ready, error } = usePlaidLink(config);

  useEffect(() => {
    if (!ready || !token) {
      return;
    }
    open();
  }, [ready, open, token]);

  return (
    <div>
      <h1>Plaid</h1>
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default Plaid;
