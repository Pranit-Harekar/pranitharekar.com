import React from "react";

import { Container, Grid, Link, Typography } from "@material-ui/core";

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
            <b>BACKGROUND</b>
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1" gutterBottom style={{ fontWeight: 200 }}>
            I'm currently a Software Developer at{" "}
            <Link
              color="textPrimary"
              className="customLink"
              target="_blank"
              href="https://www.springboardretail.com/"
            >
              <b>Springboard Retail</b>
            </Link>{" "}
            building things for mobile & web platforms with some amazingly
            talented folks. Prior to that, I graduated from{" "}
            <Link
              color="textPrimary"
              className="customLink"
              target="_blank"
              href="https://www.syracuse.edu/"
            >
              <b>Syracuse University</b>
            </Link>{" "}
            with a Master's degree focused in Computer Engineering along with a
            co-op at{" "}
            <Link
              color="textPrimary"
              className="customLink"
              target="_blank"
              href="https://mysentio.com/"
            >
              <b>ChronicleMe</b>
            </Link>
            .
            <br />
            <br />
            As a developer, I enjoy building new stuff and work with other
            people – nothing really interesting is ever built alone! I like
            learning new things & keeping myself up-to-date with the
            ever-changing technology.
            <br />
            <br />
            Vida personal — When I'm not in front of a computer screen, I'm
            probably playing video games, shooting some cool pictures or binge
            watching on Netflix. You can usually find me on Faceit/ESEA playing
            CSGO or cuddling my dog - Shera.
          </Typography>
        </Grid>
      </Grid>
    </Typography>
  </Container>
);
