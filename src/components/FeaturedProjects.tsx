import React from "react";

import { Chip, Container, Grid, Typography } from "@material-ui/core";

const project1Img = require("../assets/project1.png");
const project2Img = require("../assets/project2.png");

interface ChipData {
  key: number;
  label: string;
}

const project1Chips: ChipData[] = [
  { key: 0, label: "React" },
  { key: 1, label: "JavaScript" },
  { key: 2, label: "Ruby" },
  { key: 3, label: "Swift" },
  { key: 4, label: "Objective-C" }
];

const project2Chips: ChipData[] = [
  { key: 0, label: "React" },
  { key: 1, label: "React Native" },
  { key: 2, label: "TypeScript" },
  { key: 3, label: "GraphQL" },
  { key: 4, label: "Swift" },
  { key: 5, label: "Kotlin" }
];

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
            <b>FEATURED PROJECTS</b>
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={8}>
            <Grid item xs={8}>
              <img src={project1Img} width="600px" />
            </Grid>
            <Grid item xs>
              <Typography
                variant="body1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Springboard Retail POS 1.0
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                style={{ fontWeight: 200 }}
              >
                Built and maintained a point of sale and retail management
                software on web & iOS platforms. Added support for various
                payments & devices integrations.
              </Typography>
              {project1Chips.map(c => (
                <Chip
                  key={c.key}
                  label={c.label}
                  variant="outlined"
                  size="small"
                  color="primary"
                />
              ))}
              <div style={{ padding: 5 }}>
                <span role="img" className="horizontal">
                  {" "}
                  👉
                </span>
                <a
                  className="customLink"
                  target="_blank"
                  href="https://apps.apple.com/us/app/springboard-retail/id692910164?ls=1"
                  style={{ fontSize: 15 }}
                >
                  View iOS App
                </a>
              </div>
              <div style={{ padding: 5 }}>
                <span role="img" className="horizontal">
                  {" "}
                  👉
                </span>
                <a
                  className="customLink"
                  target="_blank"
                  href="https://www.springboardretail.com/request-test-drive-springboard-2017"
                  style={{ fontSize: 15 }}
                >
                  View Web App
                </a>
              </div>
            </Grid>
          </Grid>
          <div style={{ padding: 40 }} />
          <Grid container spacing={8}>
            <Grid item xs={8}>
              <img src={project2Img} width="600px" />
            </Grid>
            <Grid item xs>
              <Typography
                variant="body1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                Springboard Retail POS 2.0
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                style={{ fontWeight: 200 }}
              >
                Built frontend for brand new point of sale app on iOS & Android
                platforms with a cutting edge technology.
              </Typography>
              {project2Chips.map(c => (
                <Chip
                  key={c.key}
                  label={c.label}
                  variant="outlined"
                  size="small"
                  color="primary"
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Typography>
  </Container>
);
