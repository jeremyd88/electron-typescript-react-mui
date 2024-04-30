import { Box, Container, Typography } from "@mui/material";

import ActionAreaCard from "./ActionAreaCard";
import React from "react";
import coin from "../../../static/assets/set1/coin.svg"
import linkalt from "../../../static/assets/set1/link-alt.svg"
import nft from "../../../static/assets/solo-2tone/analytics.svg"
import qrcode from "../../../static/assets/qr-code.svg"
import security from "../../../static/assets/user-security.svg"
import settings from "../../../static/assets/set1/settings2.svg"
import shieldcheck from "../../../static/assets/shield-check.svg"
import wallet2 from "../../../static/wallet2.svg"

export default function Greetings(): JSX.Element {
  return (
    <Container>
      <Typography variant="h1" textAlign="center" sx={{ mt: 3, marginBottom: 3 }}>
        VerusMaker RPC Toolbox
      </Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height:128,
        },
      }}
    >
      <ActionAreaCard cardLabel="Wallet" imageUrl={wallet2} to="/getblockhash" />
      <ActionAreaCard cardLabel="Create" imageUrl={coin} to="/createtokenform" />
      {/* <Paper elevation={20} /> */}
      <ActionAreaCard cardLabel="PBaaS" imageUrl={linkalt} to="/getinfo" />
      {/* <Paper elevation={20} /> */}
      <ActionAreaCard cardLabel="Vault" imageUrl={shieldcheck} to="/vault" />
      {/* <Paper elevation={20} /> */}
      <ActionAreaCard cardLabel="VerusID" imageUrl={security} to="/verusid" />
      {/* <Paper elevation={20} /> */}
      <ActionAreaCard cardLabel="NFT" imageUrl={nft} to="/marketplace" />
      {/* <Paper elevation={20} /> */}
      <ActionAreaCard cardLabel="Tools" imageUrl={qrcode} to="/tools" />
      {/* <Paper elevation={20} /> */}
      <ActionAreaCard cardLabel="Settings" imageUrl={settings} to="/settings" /> 
       {/* <Grid container justifyContent="normal" alignItems="center" spacing={0.5}>
           
       </Grid> */}
       </Box>
    </Container>
  );
}
