import React from "react";

import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography
} from "@material-ui/core";

const getCustomFontListItem = (text: string) => (
  <ListItem>
    <Typography variant="body1" gutterBottom style={{ fontWeight: 200 }}>
      {text}
    </Typography>
  </ListItem>
);

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
            <b>SKILLS</b>
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="start"
            p={0}
            m={-1}
          >
            <Box p={0} m={0}>
              <List dense={true} style={{ margin: 0, padding: 0 }}>
                <ListItem>
                  <Typography
                    variant="body1"
                    display="block"
                    gutterBottom
                    color="primary"
                    style={{ textAlign: "right" }}
                  >
                    <b>LANGUAGES</b>
                  </Typography>
                </ListItem>
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ fontWeight: 200 }}
                >
                  {[
                    "TypeScript",
                    "Swift",
                    "Kotlin*",
                    "Ruby*",
                    "HTML/CSS/JS",
                    "Shell"
                  ].map(l => getCustomFontListItem(l))}
                </Typography>
              </List>
            </Box>
            <Box p={0} m={0}>
              <List dense={true} style={{ margin: 0, padding: 0 }}>
                <ListItem>
                  <Typography
                    variant="body1"
                    display="block"
                    gutterBottom
                    color="primary"
                    style={{ textAlign: "right" }}
                  >
                    <b>FRAMEWORKS</b>
                  </Typography>
                </ListItem>
                {["React", "React Native", "Apollo GraphQL", "Node.js"].map(l =>
                  getCustomFontListItem(l)
                )}
              </List>
            </Box>
            <Box p={0} m={0}>
              <List dense={true} style={{ margin: 0, padding: 0 }}>
                <ListItem>
                  <Typography
                    variant="body1"
                    display="block"
                    gutterBottom
                    color="primary"
                    style={{ textAlign: "right" }}
                  >
                    <b>TOOLS</b>
                  </Typography>
                </ListItem>
                {[
                  "Git/GitHub",
                  "Postman",
                  "Fastlane",
                  "Docker",
                  "Chrome Devtools"
                ].map(l => getCustomFontListItem(l))}
              </List>
            </Box>
            <Box p={0} m={0}>
              <List dense={true} style={{ margin: 0, padding: 0 }}>
                <ListItem>
                  <Typography
                    variant="body1"
                    display="block"
                    gutterBottom
                    color="primary"
                    style={{ textAlign: "right" }}
                  >
                    <b>AREAS OF EXPERTIES</b>
                  </Typography>
                </ListItem>
                {["iOS", "Android", "Web", "CI/CD"].map(l =>
                  getCustomFontListItem(l)
                )}
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Typography>
  </Container>
);
