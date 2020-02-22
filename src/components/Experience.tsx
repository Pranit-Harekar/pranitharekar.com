import React from "react";

import { Box, Container, Grid, Link, Typography } from "@material-ui/core";

// TODO: Refactor this function
export default () => (
  <Container fixed style={{ padding: "5% 0" }}>
    <Typography component="div">
      <Grid container spacing={8}>
        <Grid item xs>
          <Typography
            variant="body1"
            display="block"
            gutterBottom
            color="primary"
            style={{ textAlign: "right" }}
          >
            <b>EXPERIENCE</b>
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Box display="flex" flexDirection="column" justifyContent="start">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              style={{ paddingBottom: 20 }}
            >
              <Box display="flex" flexDirection="column" justifyContent="start">
                <Typography variant="subtitle1" gutterBottom>
                  <Link
                    target="_blank"
                    href="https://www.springboardretail.com/"
                    style={{ textDecoration: "none" }}
                  >
                    <b>Springboard Retail</b>
                  </Link>
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ fontWeight: 200 }}
                >
                  Software Developer - Retail Applications
                </Typography>
              </Box>
              <Box p={1}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ fontWeight: 200 }}
                >
                  Feb 2020 - Present
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              style={{ paddingBottom: 20 }}
            >
              <Box display="flex" flexDirection="column" justifyContent="start">
                <Typography variant="subtitle1" gutterBottom>
                  <Link
                    target="_blank"
                    href="https://www.springboardretail.com/"
                    style={{ textDecoration: "none" }}
                  >
                    <b>Springboard Retail</b>
                  </Link>
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ fontWeight: 200 }}
                >
                  Native App Developer
                </Typography>
              </Box>
              <Box p={1}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ fontWeight: 200 }}
                >
                  Dec 2018 - Feb 2020
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              style={{ paddingBottom: 20 }}
            >
              <Box display="flex" flexDirection="column" justifyContent="start">
                <Typography variant="subtitle1" gutterBottom>
                  <Link
                    target="_blank"
                    href="https://www.springboardretail.com/"
                    style={{ textDecoration: "none" }}
                  >
                    <b>Springboard Retail</b>
                  </Link>
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ fontWeight: 200 }}
                >
                  iOS Developer
                </Typography>
              </Box>
              <Box p={1}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ fontWeight: 200 }}
                >
                  Jul 2017 - Dec 2018
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Typography>
  </Container>
);
