import { Grid } from "@mui/material";
import React from 'react';
import { Provider } from 'react-redux';
import Rampnow from "../assets/icons/rampnow.png";
import store from "../reducer/store";
import { BoxStyle, GridStyle, TypographyStyle } from "../styled/sidebarStyle";
import Transactions from "./transactions";

const RampnowSideBar = () => {
  return (
    <div>
      <Grid container>
        <GridStyle item lg={2} md={2} sm={2} xs={12}>
         <BoxStyle>
          <img src={Rampnow}></img>rampnow
         </BoxStyle>
         <TypographyStyle>Dasboard</TypographyStyle>
         <TypographyStyle color marginTop>Transactions</TypographyStyle>
        </GridStyle>
        <Grid item lg={10} md={10} sm={10} xs={12}>
        <Provider store={store}>
          <Transactions/>
          </Provider>
        </Grid>
      </Grid>
    </div>
  )
}

export default RampnowSideBar
