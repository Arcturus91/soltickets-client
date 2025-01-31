import { Container, Grid, Divider, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import {
  EnhancedTable,
  RoutesPicsList,
  CountryRouteReviewCard,
} from "../components";

const HomePage = () => {
  return (
    <Container className="home-page">
      <Typography
        variant="h2"
        color="white"
        style={{ backgroundColor: "black" }}
      >
        Welcome to NFTurismPerú!
      </Typography>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Box
          sx={{
            width: 300,
            height: 200,
            display: "flex",
            p: 2,
            minWidth: 300,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" color="red">
            Mission:
          </Typography>

          <Typography variant="body1" color="white">
            To enhance the value of tourism by enabling new interactions between
            tourists and tourist sites and businesses.
          </Typography>
        </Box>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Box
          sx={{
            width: 300,
            height: 200,
            display: "flex",
            p: 2,
            minWidth: 300,
            flexDirection: "column",
            alignItems: "center",
            mt: 10,
          }}
        >
          <Typography variant="h3" color="red">
            Vision:
          </Typography>

          <Typography variant="body1" color="white">
            To make tourists have a more complete experience of their trips and
            that tourist sites and businesses have greater recognition.
          </Typography>
        </Box>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <Box
          sx={{
            width: 300,
            height: 200,
            display: "flex",
            p: 2,
            minWidth: 300,
            flexDirection: "column",
            alignItems: "center",
            ml: 10,
          }}
        >
          <Typography variant="h3" color="red">
            Solution:
          </Typography>

          <Typography variant="body1" color="white">
            Leverage technology to encourage people to get to know tourist sites
            through tokens that can be redeemed for discounts at our partners
            and promote mass adoption within the solana network.
          </Typography>
        </Box>
      </div>

      <Typography variant="h3" color="white" sx={{ mt: 20 }}>
        The Country Level Routes
      </Typography>

      <Grid
        container
        spacing={3}
        column={{ xs: 1, sm: 2, md: 3 }}
        sx={{ mt: 10, mb: 10 }}
      >
        <Grid xs={4} sx={{ mt: 2, mb: 2 }}>
          <CountryRouteReviewCard
            travelRoute={"Amazonian Route"}
            travelLink={"religiousroute"}
            introText={
              "Amazonian: In this route you will meet a beautiful variety of flora and fauna, while on the tour you will find unique sounds, great areas to explore and beautiful natural arts."
            }
            picLink={
              "https://res.cloudinary.com/dad5dandd/image/upload/v1667342877/NFTourism%20Assets/kuelap_zlrjkn.jpg"
            }
          />
        </Grid>

        <Grid xs={4} sx={{ mt: 2, mb: 2 }}>
          <CountryRouteReviewCard
            travelRoute={"Inca Route"}
            travelLink={"religiousroute"}
            introText={
              "Inca: In this route you will know the most important archaeological sites of Cusco, you will be able to observe the greatness of the Inca empire."
            }
            picLink={
              "https://res.cloudinary.com/dad5dandd/image/upload/v1667342876/NFTourism%20Assets/macchuPicchu_uetsfy.jpg"
            }
          />
        </Grid>

        <Grid xs={4} sx={{ mt: 2, mb: 2 }}>
          <CountryRouteReviewCard
            travelRoute={"Religious Route"}
            travelLink={"religiousroute"}
            introText={
              "The religious: In this route you will know the most important churches of Lima, some stand out for their beautiful architecture, others because they have great art collections."
              
            }
            picLink={
              "https://res.cloudinary.com/dad5dandd/image/upload/v1667342877/NFTourism%20Assets/catedral_hdnlfa.jpg"
            }
          />
        </Grid>

        <Grid xs={4} sx={{ mt: 2, mb: 2 }}>
          <CountryRouteReviewCard
            travelRoute={"Historic centre"}
            travelLink={"religiousroute"}
            introText={
              "Historic center: In this route you will get to know one of the most historically relevant areas of Peru, besides that you will be able to observe the most illustrious examples of Spanish monumental architecture."
            }
            picLink={
              "https://res.cloudinary.com/dad5dandd/image/upload/v1667342877/NFTourism%20Assets/centroHistorico_lxsxnn.jpg"
            }
          />
        </Grid>

        <Grid xs={4} sx={{ mt: 2, mb: 2 }}>
          <CountryRouteReviewCard
            travelRoute={"Hispter Route"}
            travelLink={"religiousroute"}
            introText={
              "Hipster Lima: You will visit places full of charm, art and tradition, where artists are the main characters of their stories."
            }
            picLink={
              "https://res.cloudinary.com/dad5dandd/image/upload/v1667342877/NFTourism%20Assets/barranco_l6tvzw.jpg"
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;


