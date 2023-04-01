import React from "react";
import {
  Grid,
  Typography,
  Container,

} from "@mui/material";

import PageTitle from "../components/PageTitle";

export default function Contact() {
  return (
    <Grid container sx={{ mx: "auto" }} id="contact">
      <Container maxWidth="lg">
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <PageTitle title="Kapcsolat"></PageTitle>
        </Grid>

        <Grid item xs={12} md={6} sx={{ textAlign: "center", p: 3 }}>
          <Typography
            noWrap
            component="img"
            sx={{
              width: "100%",
            }}
            src={`${process.env.PUBLIC_URL}/pic/contact.jpg`}
          ></Typography>
        </Grid>
      </Container>
    </Grid>
  );
}
