import * as React from 'react';

import axios from 'axios';
import { useState } from 'react';

export default function CreateTokenForm(): JSX.Element {
  const [blockHeight, setBlockHeight] = useState<string>('');
  const [ip, setIp] = useState<string>('');
  const [port, setPort] = useState<number>(0);
  const [user, setUser] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [blockHash, setBlockHash] = useState<string>('');

  const handleChange = <T extends string | number | undefined | null>(
    event: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<T>>
  ) => {
    setState(event.target.value as T);
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>, setBlockHash: React.Dispatch<React.SetStateAction<string>>) => { 
    event.preventDefault();
  
    const rpcData = {
      jsonrpc: "2.0",
      id: 1, 
      method: "getblockhash",
      params: [parseInt(blockHeight)],
      }; 
      
    const config = {
      auth: {
        username: user,
        password: pass,
      },
    };

    const url = `http://${ip}:${port}`; 

      try {
        const response = await axios.post(url, rpcData, config); 
        const blockHash = response.data.result;  
        setBlockHash(blockHash); 
          } catch (error) {
            console.error(error); 
          };  
        }

      return (
        <form className="form-container" onSubmit={(event) => handleSubmit(event as React.FormEvent<HTMLFormElement>, setBlockHash)}> 
          <div>
            <input 
            id="blockHeight"
            placeholder="Enter Block Height"
            type="string" 
            value={blockHeight} 
            onChange={(event) => handleChange(event as React.ChangeEvent<HTMLInputElement>, setBlockHeight)}  /> 
          </div>
          <div>
          <input 
            id="ip"
            placeholder="Enter IP Address"
            type="string"
            value={ip}
            onChange={(event) => handleChange(event as React.ChangeEvent<HTMLInputElement>, setIp)} />
          </div>
          <div>
            <input 
            id="port"
            placeholder="Enter Port Number"
            type="number"
            value={port}
            onChange={(event) => handleChange(event as React.ChangeEvent<HTMLInputElement>, setPort)} />
          </div>
          <div>
            <input 
            id="username"
            placeholder="RPC Username"
            type="string"
            value={user}
            onChange={(event) => handleChange(event as React.ChangeEvent<HTMLInputElement>, setUser)} />
          </div>
          <div>
            <input 
            id="password"
            placeholder="RPC Password"
            type="password"
            value={pass}
            onChange={(event) => handleChange(event as React.ChangeEvent<HTMLInputElement>, setPass)} />
          </div>
            <button type="submit" className="submit-button">Get Block Hash</button>
            {blockHash && <p>Block Hash: {blockHash}</p>}
        </form>  
          ); 
}  