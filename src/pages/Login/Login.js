import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  CardMedia,
  Grid,
  InputLabel,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Typography,
  DialogContent,
  Dialog,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Input from "../../components/common/Input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AnimatedImage from "./AnimatedImage";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    alignItems: "center",
    marginTop: "50px",
  },
  subMain: {
    margin: "0 auto",
    backgroundColor: "#e4e4e4",
    borderRadius: "20px",
  },

  mainCard: {
    boxShadow: "none !important",
    backgroundColor: "#fff !important",
    color: "#000 !important",
    display: "block",
    textAlign: "center",
  },
  boxCard: {
    width: "360px",
    padding: "40px",
  },
  typography: {
    fontSize: "25px !important",
    fontWeight: "600 !important",
    color:"rgb(255, 87, 34)"
  },
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: 1040,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    width: "1040px !important",
    maxWidth: "1040px",
    height: "480px",
  },
  "& .MuiButton-root:hover" : {
    backgroundColor:"rgb(255, 87, 34) !important"
  }
}));

const Login = ({ open, handleClose, setOpen }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <React.Fragment>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          sx={{ minWidth: "800px" }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} sx={{ marginBottom: "-16px" }}>
                <Grid item xs={6}>
                  <Box sx={{ marginLeft: "-16px", marginTop: "-18px" }}></Box>
                  <AnimatedImage />
                </Grid>
                <Grid item xs={6}>
                  <Box className={classes.main}>
                    <Box className={classes.subMain}>
                      <Grid
                        container
                        item
                        columns={{ xs: 4, sm: 12, md: 12 }}
                        spacing={1}
                        sx={{
                          alignItems: "center",
                        }}
                      >
                        <Grid item xs={12} md={12}>
                          <Box className={classes.boxCard}>
                            <Typography className={classes.typography}>
                              Sign up
                            </Typography>

                            <form>
                              <Box sx={{ marginBottom: "10px" }}>
                                <Input
                                  text="Add New"
                                  variant="outlined"
                                  color="primary"
                                  label="Email"
                                  name="email"
                                  // value={values.email}
                                  // onChange={handleInputChange}
                                  maxLength={30}
                                />
                              </Box>

                              <Box sx={{ marginBottom: "10px" }}>
                                <Input
                                  text="Add New"
                                  variant="outlined"
                                  color="primary"
                                  label="Name"
                                  name="name"
                                  // value={values.name}
                                  // onChange={handleInputChange}
                                  maxLength={20}
                                />
                              </Box>

                              <FormControl
                                sx={{ marginTop: "10px", width: "100%" }}
                                variant="outlined"
                              >
                                <InputLabel
                                  htmlFor="outlined-adornment-password"
                                  sx={{
                                    color: "black",
                                    bgcolor: "#e4e4e4",
                                    lineHeight: "1",
                                  }}
                                >
                                  Password
                                </InputLabel>
                                <OutlinedInput
                                  sx={{
                                    "& .MuiInputBase-input": {
                                      padding: "12px 14px !important",
                                    },

                                    "& .MuiOutlinedInput-notchedOutline": {
                                      paddingTop: "10px!important",
                                      borderColor: "rgba(107, 114, 128, .5)",

                                      borderRadius: "7px!important",
                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline":
                                      {
                                        borderColor: "black",
                                      },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                      {
                                        borderColor: "blue",
                                      },
                                    paddingTop: "0px",
                                    color: "#000",
                                  }}
                                  id="outlined-adornment-password"
                                  name="password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  type={showPassword ? "text" : "password"}
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        sx={{ color: "#000" }}
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {showPassword ? (
                                          <VisibilityOff />
                                        ) : (
                                          <Visibility />
                                        )}
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                />
                              </FormControl>

                              <Button
                                sx={{ marginTop: "10px", width: "100%", backgroundColor:"rgb(255, 87, 34)" }}
                                variant="contained"
                                // onClick={onClick}
                                size="medium"
                              >
                                Signup
                              </Button>
                            </form>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
        </BootstrapDialog>
      </React.Fragment>
    </div>
  );
};

export default Login;
