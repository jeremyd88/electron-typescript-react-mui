import React, { useEffect, useState } from 'react';

function GetInfo() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [rpcUsername, setRpcUsername] = useState('');
  const [rpcPassword, setRpcPassword] = useState('');
  const [rpcIP, setRpcIP] = useState('');
  const [rpcPort, setRpcPort] = useState('');

  useEffect(() => {
    const fetchInfo = async () => {
      // Construct the RPC URL
      const rpcUrl = `http://${rpcUsername}:${rpcPassword}@${rpcIP}:${rpcPort}`;

      try {
        // Execute the VerusCoin RPC call using the fetch API
        const response = await fetch(rpcUrl, {
          method: 'POST',
          mode: 'no-cors',
          cache: 'no-cache',
          credentials: 'omit',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            jsonrpc: '1.0',
            method: 'getinfo',
            id: '1'
          })
        });

        // Parse the JSON response
        const result = await response.json();
        // Update the state with the result
        setInfo(result);

      } catch (error) {
        console.error('Error:', error);
        setError(null);
      }
    };

    // Execute the RPC call only if all RPC credentials are provided
    if (rpcUsername && rpcPassword && rpcIP && rpcPort) {
      fetchInfo();
    }
  }, [rpcUsername, rpcPassword, rpcIP, rpcPort]);

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    fetchInfo();
  };

  return (
    <div>
      <h2>VerusCoin Info</h2>
      <form onSubmit={handleSubmit}>
        <label>
          RPC Username:
          <input type="text" value={rpcUsername} onChange={(e) => setRpcUsername(e.target.value)} />
        </label>
        <br />
        <label>
          RPC Password:
          <input type="password" value={rpcPassword} onChange={(e) => setRpcPassword(e.target.value)} />
        </label>
        <br />
        <label>
          RPC IP:
          <input type="text" value={rpcIP} onChange={(e) => setRpcIP(e.target.value)} />
        </label>
        <br />
        <label>
          RPC Port:
          <input type="text" value={rpcPort} onChange={(e) => setRpcPort(e.target.value)} />
        </label>
        <br />
        <button type="submit">Get Info</button>
      </form>
      {info && (
        <div>
          <p>Version: {info}</p>
          <p>Protocol Version: {info}</p>
          <p>Blocks: {info}</p>
          <p>Connections: {info}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default GetInfo;

function fetchInfo() {
    throw new Error('Function not implemented.');
}
