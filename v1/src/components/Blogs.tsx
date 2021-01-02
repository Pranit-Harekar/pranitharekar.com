import React from "react";

import { Box, Container, Grid, Link, Typography } from "@material-ui/core";

interface IBlog {
  title: string;
  link: string;
  description: string;
}

const blogs: IBlog[] = [
  {
    title: "Resolving CocoaPods issues in React Native project",
    link:
      "https://medium.com/@harekarpranit/resolving-cocoapods-issues-in-react-native-project-59386a3900f7",
    description: " Published on Aug 4, 2018 · 4 min read"
  },
  {
    title: "React Native Custom Fonts — iOS",
    link: "https://medium.com/@harekarpranit/nicely-explained-6ddf409babd1",
    description: "Published on Nov 20, 2017 · 1 min read"
  },
  {
    title: "How to add MagTek iOS SDK to your Xcode Project",
    link:
      "https://medium.com/@harekarpranit/how-to-add-magtek-ios-sdk-to-your-xcode-project-swift-79faff1d0228",
    description: "Published on Apr 7, 2018 · 2 min read"
  },
  {
    title: "A simple boilerplate for React Native Web",
    link:
      "https://medium.com/@harekarpranit/a-simple-boilerplate-for-react-native-web-996148a8be60",
    description: "Published on Feb 23, 2019 · 1 min read"
  }
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
            <b>BLOGS</b>
          </Typography>
        </Grid>
        <Grid item xs={8}>
          {blogs.map(blog => (
            <Box display="flex" flexDirection="column" justifyContent="start">
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="start"
                >
                  <Box>
                    <Typography variant="body1" display="block" gutterBottom>
                      <Link
                        color="textPrimary"
                        style={{ textDecoration: "none" }}
                        href={blog.link}
                      >
                        <b>{blog.title}</b>
                      </Link>
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      gutterBottom
                      style={{ fontWeight: 200 }}
                    >
                      {blog.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <div style={{ padding: 15 }} />
            </Box>
          ))}
        </Grid>
      </Grid>
    </Typography>
  </Container>
);
