import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions } from "@mui/material";
import Image2 from "../../images/Gallery/gallery7.jpg";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import moment from "moment";

const WeddingList = () => {
  const navigate = useNavigate();
  const [allGetWedding, setAllGetWedding] = useState([]);

  const getWeddingDetials = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/weddings`);
      // if (res?.data?.status === true) {
      setAllGetWedding(res?.data?.data);

      // } else {
      // }
    } catch (err) {}
  };

  useEffect(() => {
    getWeddingDetials();
  }, []);

  return (
    <div>
      <div
        style={{
          minHeight: "calc(100vh - 40vh)",
          overflow: "hidden",
          width: "100%",
          marginTop: "110px",
        }}
      >
        <div
          style={{
            width: "100%",
            backgroundImage: "linear-gradient(342deg,#108483,#00a7a6)",
            color: "#FFFFFF",
          }}
        >
          <section
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                // width: "100%",
              }}
            >
              <h1>All weddings</h1>
              <h4>Choose the wedding you would like to join</h4>
            </div>
          </section>
        </div>

        <div className="contact-top">
          <div className="container">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              {allGetWedding?.map((item, index) => (
                <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={item?.photo}
                      alt="green iguana"
                      sx={{
                        height: "384px",
                        width: "400px",
                        position: "relative",
                      }}
                      onClick={() =>
                        navigate("/weddingDetails", { state: { item } })
                      }
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
                      {item?.bridefirstname || "John"}{" "}
                      {item?.bridelastname || "jocky"} &{" "}
                      {item?.groomfirstName || "MK"}{" "}
                      {item?.groomlastName || "CK"} WEDDING
                    </Typography>
                  </CardActionArea>
                  <CardActions>
                    <Box display="flex" flexDirection="row">
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        fontSize="19px"
                        marginRight="10px"
                      >
                        {item?.city},
                      </Typography>
                      <Typography variant="h6" fontWeight="400" fontSize="18px">
                        {item?.country || "India"},
                      </Typography>
                    </Box>

                    <Typography
                      variant="h6"
                      fontSize="19px"
                      fontWeight="400"
                      sx={{ marginLeft: "15px" }}
                    >
                      {moment().format("MMM Do YY", item.weddingstartDate)} to{" "}
                      {moment().format("MMM Do YY", item.weddingendDate)}
                    </Typography>
                  </CardActions>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingList;
