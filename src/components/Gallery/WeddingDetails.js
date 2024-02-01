import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image2 from "../../images/Gallery/gallery7.jpg";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const VisitAnotherBox = styled("div")({
  textAlign: "center",
  marginTop: 20,
});

const VisitAnotherCard = styled(Card)({
  maxWidth: 400,
  margin: "auto",
});

const WeddingDetails = () => {
  const state = useLocation();
  console.log("state", state.state.item?._id);

  const [allGetWeddingDetails, setAllGetWeddingDetails] = useState([]);
  console.log("allGetWeddingDetails", allGetWeddingDetails);

  const getWeddingDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1//wedding/${state.state.item?._id}`
      );

      // if (res?.data?.status === true) {
      setAllGetWeddingDetails(res?.data?.data);

      // } else {
      // }
    } catch (err) {}
  };

  useEffect(() => {
    getWeddingDetails();
  }, []);

  return (
    <div>
      <div
        style={{
          minHeight: "calc(100vh - 40vh)",
          overflow: "hidden",
          width: "100%",
          padding: "120px",
        }}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ width: "100%", marginBottom: "20px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={allGetWeddingDetails?.photo}
                    alt="wedding"
                    sx={{
                      height: "500px",
                      width: "100%",
                      position: "relative",
                    }}
                  />

                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      color: "white",
                      padding: "16px",
                      width: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {allGetWeddingDetails?.bridefirstname || "John"}{" "}
                    {allGetWeddingDetails?.bridelastname || "jocky"} &{" "}
                    {allGetWeddingDetails?.groomfirstName || "MK"}{" "}
                    {allGetWeddingDetails?.groomlastName || "CK"} WEDDING
                    WEDDING
                  </Typography>
                </CardActionArea>
              </Card>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Card sx={{ width: "175px" }}>
                        <Box sx={{ backgroundColor: "#ff5252" }}>
                          <Typography
                            sx={{
                              fontSize: "20px",
                              justifyContent: "center",
                              display: "flex",
                              fontWeight: "700",
                            }}
                          >
                            {`Day ${allGetWeddingDetails?.daysOfWedding}`}
                          </Typography>
                        </Box>

                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "3px",
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontSize="18px"
                            fontWeight="500"
                          >
                            Friday, January 26, 2024 Ambala
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={4}>
                      <Card sx={{ width: "175px", marginLeft: "93px" }}>
                        <Box sx={{ backgroundColor: "#ff5252" }}>
                          <Typography
                            sx={{
                              fontSize: "20px",
                              justifyContent: "center",
                              display: "flex",
                              fontWeight: "700",
                            }}
                          >
                            Day 2
                          </Typography>
                        </Box>

                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "3px",
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontSize="18px"
                            fontWeight="500"
                          >
                            Friday, January 26, 2024 Ambala
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={4}>
                      <Card sx={{ width: "175px", marginLeft: "187px" }}>
                        <Box sx={{ backgroundColor: "#ff5252" }}>
                          <Typography
                            sx={{
                              fontSize: "20px",
                              justifyContent: "center",
                              display: "flex",
                              fontWeight: "700",
                            }}
                          >
                            Day 3
                          </Typography>
                        </Box>

                        <CardContent
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "3px",
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontSize="18px"
                            fontWeight="500"
                          >
                            Friday, January 26, 2024 Ambala
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}></Grid>
              </Grid>

              <Grid sx={{ marginTop: "20px" }}>
                <Card sx={{ width: "100%", marginBottom: "20px" }}>
                  <CardContent>
                    <Typography variant="h6">About the hosts</Typography>
                    <Typography variant="subtitle1">
                      {allGetWeddingDetails?.bridefirstname || "John"}{" "}
                      {allGetWeddingDetails?.bridelastname || "jocky"} &{" "}
                      {allGetWeddingDetails?.groomfirstName || "MK"}{" "}
                      {allGetWeddingDetails?.groomlastName || "CK"} story
                    </Typography>
                    <Typography variant="body1">
                      {allGetWeddingDetails?.story}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid sx={{ marginTop: "20px" }}>
                {allGetWeddingDetails?.weddingDetails?.map((item) => {
                  return (
                    <>
                      <Card sx={{ width: "100%", marginBottom: "20px" }}>
                        <CardContent>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              {/* Day Title */}
                              <Typography variant="h6" gutterBottom>
                                Day 1 |{" "}
                                {moment(item?.startDt).format(
                                  "dddd, MMMM DD, YYYY"
                                )}{" "}
                                | {item?.city}
                              </Typography>

                              {/* Starting Time */}
                              <Typography variant="body1">
                                Starting time (approximately):{" "}
                                <strong>{item?.time}</strong>
                              </Typography>

                              <Typography
                                variant="body1"
                                className="margin-bottom-1"
                              >
                                Venue and host contact details will be disclosed
                                upon booking.
                              </Typography>

                              <div
                                className="info-container"
                                style={{ marginTop: "20px" }}
                              >
                                <label>Accommodation:</label>
                                <strong>Not included</strong>
                              </div>
                              <div className="info-container">
                                <label>Transportation:</label>
                                <strong>Not included</strong>
                              </div>
                              {item?.events?.map((row) => {
                                return (
                                  <>
                                    <div
                                      style={{
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <Typography
                                        variant="subtitle1"
                                        className="margin-bottom-1"
                                      >
                                        {row?.eventName}
                                      </Typography>

                                      <Typography
                                        variant="body1"
                                        sx={{
                                          marginBottom: "15px",
                                          marginTop: "15px",
                                        }}
                                      >
                                        {row?.description}
                                      </Typography>

                                      {/* Music/Dancing and Dress Code Details */}
                                      <div className="info-container">
                                        <label>Music / Dancing:</label>
                                        <strong>{row?.music}</strong>
                                      </div>
                                      <div className="info-container">
                                        <label>Dress Code:</label>
                                        <strong>{row?.dressCode}</strong>
                                      </div>
                                    </div>
                                  </>
                                );
                              })}
                            </Grid>
                          </Grid>
                        </CardContent>
                        <Divider sx={{ backgroundColor: "black" }} />
                      </Card>
                    </>
                  );
                })}
              </Grid>
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 285, width: "100%", margin: "20px" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: "700px",
                    }}
                  >
                    Jagdeep & Navdeep's wedding
                  </Typography>
                  <Box sx={{ border: "1px solid gray", borderRedius: "10px" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                        padding: "15px",
                        fontSize: "18px",
                      }}
                    >
                      Jagdeep & Navdeep have already celebrated their wedding in
                      India, therefore invitations are closed.
                    </Typography>
                  </Box>

                  <div
                    style={{
                      backgroundColor: "#f0f0f0",
                      padding: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <div>
                      Your contribution always acts as a gift to the couple and
                      includes entry to all ceremonies on all days.
                    </div>
                    <div
                      className="flex-container"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "10px",
                      }}
                    >
                      <span
                        className="bigger"
                        sx={{ fontSize: "1.5em", fontWeight: "bold" }}
                      >
                        $250 USD
                      </span>
                      <span className="smaller" sx={{ color: "gray" }}>
                        per person
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Grid>
                <Card
                  sx={{
                    maxWidth: 285,
                    width: "100%",
                    margin: "20px",
                    backgroundColor: "#078e8d",
                  }}
                >
                  <CardContent>
                    <VisitAnotherBox>
                      <Typography variant="h6">
                        Interested in visiting another wedding?
                      </Typography>
                      <Button variant="contained" color="secondary" fullWidth>
                        Let us match you with a wedding
                      </Button>
                    </VisitAnotherBox>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default WeddingDetails;
