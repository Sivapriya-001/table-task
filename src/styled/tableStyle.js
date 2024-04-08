import { Button, Grid, TableCell } from "@mui/material";

export const GridStyle = (props) => {
  return (
    <Grid
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "2vh",
      }}
      {...props}
    />
  );
};
export const DivStyle = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding:"5px"
      }}
      {...props}
    />
  );
};
export const ButtonStyle = (props) => {
  return (
    <Button
      style={{
        textTransform:"capitalize",
        color:"black"
      }}
      {...props}
    />
  );
};
export const TableCellStyle = ({padding, fontWeight, ...props}) => {
  return (
    <TableCell
      style={{
       fontWeight: fontWeight ? "bold" : "",
       padding: padding?"5px" : "10px",
       textAlign:"left"
      }}
      {...props}
    />
  );
};
export const ImgStyle = (props) => {
  return (
    <img
      style={{
       width:"18px",
       height:"18px",
       padding:"5px"
      }}
      {...props}
    />
  );
};
export const PaginationButtonStyle = (props) => {
  return (
    <Button
      style={{
        width:"15px",
        height:"25px",
        margin:"5px"
      }}
      {...props}
    />
  );
};