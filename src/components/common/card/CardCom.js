import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import Image1 from "../../../images/Gallery/gallery7.jpg";
import Image2 from "../../../images/Gallery/gallery9.jpg";
import Image3 from "../../../images/Gallery/gallery12.jpg";
import axios from "axios";

const CardCom = () => {
  const [allGetWedding, setAllGetWedding] = useState([]);

  const getWeddingDetials = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/weddings`);
      // if (res?.data?.status === true) {
      // setAllGetWedding(res?.data?.data);
      const firstThreeData = res?.data?.data.slice(0, 3);
      setAllGetWedding(firstThreeData);
      // } else {
      // }
    } catch (err) {}
  };

  useEffect(() => {
    getWeddingDetials();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "20px",
        gap: "10px",
      }}
    >
      {allGetWedding?.map((item) => {
        return (
          <>
            <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Image1}
                  alt="green iguana"
                  sx={{ height: "384px", width: "400px", position: "relative" }}
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
                  {item?.bride?.firstname || "John"}{" "}
                  {item?.bride?.lastname || "jocky"} &{" "}
                  {item?.groom?.firstName || "MK"}{" "}
                  {item?.groom?.lastName || "CK"} WEDDING
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
                    Anand,
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
                  21 to 23 Jan, 2024
                </Typography>
              </CardActions>
            </Card>
          </>
        );
      })}

      {/* <Card sx={{ maxWidth: 345, marginLeft: "15px", maxHeight: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={Image2}
            alt="green iguana"
            sx={{ height: "384px", width: "400px", position: "relative" }}
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
            DK & CK's WEDDING
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
              Anand,
            </Typography>
            <Typography variant="h6" fontWeight="400" fontSize="18px">
              India,
            </Typography>
          </Box>

          <Typography
            variant="h6"
            fontSize="19px"
            fontWeight="400"
            sx={{ marginLeft: "15px" }}
          >
            21 to 23 Jan, 2024
          </Typography>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginLeft: "15px", maxHeight: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={Image3}
            alt="green iguana"
            sx={{ height: "384px", width: "400px", position: "relative" }}
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
            Diffu & MADHU's WEDDING
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
              Anand,
            </Typography>
            <Typography variant="h6" fontWeight="400" fontSize="18px">
              India,
            </Typography>
          </Box>

          <Typography
            variant="h6"
            fontSize="19px"
            fontWeight="400"
            sx={{ marginLeft: "15px" }}
          >
            21 to 23 Jan, 2024
          </Typography>
        </CardActions>
      </Card> */}
    </div>
  );
};

export default CardCom;
