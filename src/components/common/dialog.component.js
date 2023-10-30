import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import styled from "@emotion/styled";

const CustomDialog = ({ children, open, handleClose }) => {
  // const CustomDialog = styled(Dialog)(({ theme }) => ({
  //   "& .MuiPaper-root": {
  //     backgroundColor: "#606060",
  //   },
  // }));

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Host Wedding</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
