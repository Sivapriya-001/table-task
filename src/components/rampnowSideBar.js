import { Grid } from "@mui/material";
import React from "react";
import Rampnow from "../assets/icons/rampnow.png";
import { BoxStyle, GridStyle, TypographyStyle } from "../styled/sidebarStyle";
import RampnowTable from "./rampnowTable";

const RampnowSideBar = () => {
  return (
    <div>
      <Grid container>
        <GridStyle item lg={2} md={2} sm={2} xs={12}>
          <BoxStyle>
            <img src={Rampnow}></img>rampnow
          </BoxStyle>
          <TypographyStyle>Dasboard</TypographyStyle>
          <TypographyStyle color marginTop>
            Transactions
          </TypographyStyle>
        </GridStyle>
        <Grid item lg={10} md={10} sm={10} xs={12}>
            <RampnowTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default RampnowSideBar;
