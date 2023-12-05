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
import { useFormik } from 'formik';
import { Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./animation.css"
import { LoginApi } from "../../api/auth/login";




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
    color: "rgb(255, 87, 34)"
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
  "& .MuiButton-root:hover": {
    backgroundColor: "rgb(255, 87, 34) !important"
  }
}));

const Login = ({ open, handleClose, setOpen }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const LoginData = JSON.parse(localStorage.getItem("userData"));


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
  });


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await LoginApi(values); 
        handleClose();
        resetForm();
      } catch (error) {
        console.error('Login error:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });





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

                            <Form onSubmit={formik.handleSubmit}>
                              <Box sx={{ marginBottom: "10px" }}>
                                <div>
                                  <Field
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeHolder="Email"
                                    className="email-input"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    style={{
                                      width: "100%",
                                      height: "40px",
                                      backgroundColor: "#e4e4e4",
                                      borderRadius: "5px",
                                      border: "1px solid #898686",
                                    }
                                    }
                                  />
                                      {formik.errors.email ? ( 
                                    <ErrorMessage
                                      name="email"
                                      component="div"
                                      style={{
                                        marginTop: "5px",
                                        color: "red",
                                        fontSize: "15px"
                                      }}
                                    />
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </Box>

                             

                              <Box sx={{ marginBottom: "10px" }}>
                                <div>
                                  <Field
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    className="password-input"
                                    style={{
                                      width: "100%",
                                      height: "40px",
                                      backgroundColor: "#e4e4e4",
                                      borderRadius: "5px",
                                      border: "1px solid #898686",

                                    }}
                                  />
                                  <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    style={{
                                      position: 'absolute',
                                      right: '140px',
                                      marginTop: "6px",
                                      backgroundColor: 'transparent',
                                      border: 'none',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                  </button>
                                  {formik.errors.password ? ( 
                                    <ErrorMessage
                                      name="password"
                                      component="div"
                                      style={{
                                        marginTop: "5px",
                                        color: "red",
                                        fontSize: "15px"
                                      }}
                                    />
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </Box>

                              <Button
                                sx={{ marginTop: "10px", width: "100%", backgroundColor: "rgb(255, 87, 34)" }}
                                variant="contained"
                                type="submit"
                                size="medium"
                              >
                                Signup
                              </Button>
                            </Form>
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
