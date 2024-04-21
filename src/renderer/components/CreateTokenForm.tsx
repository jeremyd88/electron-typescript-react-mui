import * as React from 'react';

import { Container, Grid } from "@mui/material";

import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Input } from "@mui/material";
import { InputLabel } from "@mui/material";
import NavButton from './NavButton';
import axios from 'axios';
import { useState } from 'react';

export default function CreateTokenForm(): JSX.Element {
  const [blockHeight, setBlockHeight] = useState("");
  const [blockHash, setBlockHash] = useState("");
  const [ip, setIp] = useState("localhost");
  const [port, setPort] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const rpcData = {
      jsonrpc: "2.0",
      id: 1,
      method: "getblockhash",
      params: [parseInt(blockHeight)],
    };

    const config = {
      auth: {
        username: username,
        password: password,
      },
    };

    const url = `http://${ip}:${port}`;

    try {
      const response = await axios.post(url, rpcData, config);
      setBlockHash(response.data.result);
    } catch (error) {
      setBlockHash("");
    }
  };
  return (
    <Container>
      <Grid container marginTop={10} justifyContent="space-around">
      <Card variant="outlined" sx={{ maxWidth: 375, backgroundColor: (theme) => theme.palette.secondary.main }}>
        <h2>Get Block Hash</h2>
        <h3>
          Enter desired Block Height and RPC credentials.
        </h3>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <InputLabel className="text-white" htmlFor="blockHeight">
                  Block Height
                </InputLabel>
                <Input
                  className="bg-gray-800 text-white"
                  id="blockHeight"
                  placeholder="Enter block height"
                  type="number"
                  value={blockHeight}
                  onChange={(event) => handleChange(event as React.ChangeEvent<HTMLInputElement>, setBlockHeight)} />
              </div>
              <div className="space-y-2">
                <InputLabel className="text-white" htmlFor="rpcIp">
                  RPC IP
                </InputLabel>
                <Input
                  className="bg-gray-800 text-white"
                  id="rpcIp"
                  placeholder="Enter RPC IP"
                  type="text"
                  value={ip}
                  onChange={(event) => handleChange(event as React.ChangeEvent<HTMLInputElement>, setIp)} />
              </div>
              <div className="space-y-2">
                <InputLabel className="text-white" htmlFor="rpcPort">
                  RPC Port
                </InputLabel>
                <Input
                  className="bg-gray-800 text-white"
                  id="rpcPort"
                  placeholder="Enter RPC Port"
                  type="number"
                  value={port}
                  onChange={(event) => handleChange(event as React.ChangeEvent<HTMLInputElement>, setPort)} />
              </div>
              <div className="space-y-2">
                <InputLabel className="text-white" htmlFor="rpcUsername">
                  RPC Username
                </InputLabel>
                <Input
                  className="bg-gray-800 text-white"
                  id="rpcUsername"
                  placeholder="Enter RPC Username"
                  type="text"
                  value={username}
                  onChange={(event) => handleChange(event as React.ChangeEvent<HTMLInputElement>, setUsername)} />
              </div>
              <div className="space-y-2">
                <InputLabel className="text-white" htmlFor="rpcPassword">
                  RPC Password
                </InputLabel>
                <Input
                  className="bg-gray-800 text-white"
                  id="rpcPassword"
                  placeholder="Enter RPC Password"
                  type="password"
                  value={password}
                  onChange={(event) => handleChange(event as React.ChangeEvent<HTMLInputElement>, setPassword)} />
              </div>
            </div>
            <button type="submit" className="submit-button">
              Get Block Hash
            </button>
            <NavButton to="/greetings" navLabel='Home'/>
            <NavButton to=" " navLabel='Submit'/>
          </CardContent>
        </form>
      </Card>
      </Grid>
    </Container>
  );
}
