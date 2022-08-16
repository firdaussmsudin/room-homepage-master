import React, { useState } from "react";
import { Box, Grid, Typography, Button, styled, SvgIcon } from "@mui/material";
import headerTextContent from "../data/data";
import ImageBottom1 from "../images/image-about-dark.jpg";
import ImageBottom2 from "../images/image-about-light.jpg";
import iconArrow from "../images/icon-arrow.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import theme from "../theme/theme";

const StyledBox = styled(Box)({
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "40vh",
});

const StyledButton = styled(Button)({
  padding: "25px",
  backgroundColor: "tertiary.main",
  borderRadius: "0",
  backgroundColor: theme.palette.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette.tertiary.main,
  },
});

const bottomTextContent = {
  head: "About our future",
  body: "Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, form traditional comptemporary styles or anything in between. Product specialists are available to help you create your dream space.",
};

function Header() {
  const [headerText, setHeaderText] = useState(0);

  const headerTextNext = () => {
    headerText >= 2 ? setHeaderText(0) : setHeaderText(headerText + 1);
  };

  const headerTextPrev = () => {
    headerText == 0 ? setHeaderText(2) : setHeaderText(headerText - 1);
  };

  return (
    <>
      <Grid container spacing={0}>
        <Grid
          item
          md={7.3}
          xs={12}
          sx={{
            backgroundImage: {
              xs: `url(${headerTextContent[headerText].imageMobile})`,
              md: `url(${headerTextContent[headerText].image})`,
            },
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "60vh",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
              },
              justifyContent: "flex-end",
              alignItems: "flex-end",
              height: "100%",
            }}
          >
            <StyledButton
              startIcon={<ArrowBackIosNewIcon />}
              onClick={headerTextPrev}
            ></StyledButton>
            <StyledButton
              startIcon={<ArrowForwardIosIcon />}
              onClick={headerTextNext}
            ></StyledButton>
          </Box>
        </Grid>
        <Grid item md={4.7} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                m: { xs: "15% 50px", md: "10% 50px 0 50px" },
              }}
            >
              <Typography
                variant="h2"
                color="secondary"
                gutterBottom
                sx={{ fontSize: { md: "2.2rem", xs: "2rem" } }}
              >
                {headerTextContent[headerText].head}
              </Typography>
              <Typography
                variant="subtitle1"
                color="info.main"
                gutterBottom
                paragraph
              >
                {headerTextContent[headerText].body}
              </Typography>
              <Box >
                <Typography variant="button1" color="tertiary.main" sx={{cursor:'pointer',"&:hover":{color:theme.palette.info.main}, display:'flex',alignItems:'center'}}>
                  SHOP NOW
                  <SvgIcon inheritViewBox sx={{width:"50px",height:"15px","&:hover":{color:theme.palette.info.main}}}><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" /></SvgIcon>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <StyledButton
                startIcon={<ArrowBackIosNewIcon />}
                onClick={headerTextPrev}
              ></StyledButton>
              <StyledButton
                startIcon={<ArrowForwardIosIcon />}
                onClick={headerTextNext}
              ></StyledButton>
            </Box>
          </Box>
        </Grid>
        <Grid item md={3.5} xs={12}>
          <StyledBox
            sx={{ backgroundImage: `url(${ImageBottom1})` }}
          ></StyledBox>
        </Grid>
        <Grid item md={5} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              p: { xs: "50px", md: "0 50px" },
            }}
          >
            <Typography variant="h3" color="secondary" gutterBottom>
              {bottomTextContent.head}
            </Typography>
            <Typography variant="subtitle1" color="info.main" gutterBottom>
              {bottomTextContent.body}
            </Typography>
          </Box>
        </Grid>
        <Grid item md={3.5} xs={12}>
          <StyledBox
            sx={{ backgroundImage: `url(${ImageBottom2})` }}
          ></StyledBox>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
