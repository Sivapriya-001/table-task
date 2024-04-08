import { Box, Grid, Typography } from "@mui/material";

export const GridStyle = (props) => {
    return (
      <Grid
        style={{
            backgroundColor:"#020027",
            height:"100vh"
         }}
        {...props}
      />
    );
  };

export const BoxStyle = (props) => {
    return (
      <Box
        style={{
            color:"#FFFFFF",
            fontWeight:"500",
            fontSize:"20px",
            display:"flex",
            alignItems:"start",
            justifyContent:"space-between",
            marginTop:"20px",
            padding:"10px"
         }}
        {...props}
      />
    );
  };

  export const TypographyStyle = ({marginTop, color, ...props}) => {
    return (
      <Typography
        style={{
            color: color ? "#F8F8F8" : "#A8A8A8",
            fontSize:"20px",
            fontWeight:"700",
            textAlign:"center",
            marginTop:marginTop ? "2vh" : "12vh"
         }}
        {...props}
      />
    );
  };