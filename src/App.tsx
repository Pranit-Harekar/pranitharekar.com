import React from "react";
import "./App.css";
import {
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  Box
} from "@material-ui/core";

const projectImg = require("./project.png");

const Intro = () => (
  <Container fixed style={{ padding: "10% 0" }}>
    <Typography
      component="div"
      style={{
        backgroundColor: "#cfe8fc"
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        style={{
          paddingBottom: "10%"
        }}
      >
        Hello! 👋
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        style={{
          paddingBottom: "10%",
          maxWidth: "60%"
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Get in touch 👉{" "}
        <a href="mailto:pranitharekar@hotmail.com">pranitharekar@hotmail.com</a>
      </Typography>
    </Typography>
  </Container>
);

const Background = () => (
  <Container fixed style={{ padding: "5% 0" }}>
    <Typography
      component="div"
      style={{
        backgroundColor: "#cfe811"
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs>
          <Typography variant="h6" gutterBottom style={{ textAlign: "right" }}>
            Background
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1" gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac. Consequat mauris nunc
            congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque
            volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu
            facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus
            viverra accumsan in. In hendrerit gravida rutrum quisque non tellus
            orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi
            tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend.
            Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere
            sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
        </Grid>
      </Grid>
    </Typography>
  </Container>
);

const Skills = () => (
  <Container fixed style={{ padding: "7% 0" }}>
    <Typography
      component="div"
      style={{
        backgroundColor: "#12e8ff"
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs>
          <Typography variant="h6" gutterBottom style={{ textAlign: "right" }}>
            Skills
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="start"
            p={1}
            m={1}
            style={{ margin: 0, padding: 0 }}
          >
            <Box p={1} style={{ margin: 0, padding: 0 }}>
              <List style={{ margin: 0, padding: 0 }}>
                <ListItem>JavaScript</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>JavaScript</ListItem>
              </List>
            </Box>
            <Box p={1} style={{ margin: 0, padding: 0 }}>
              <List style={{ margin: 0, padding: 0 }}>
                <ListItem>JavaScript</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>JavaScript</ListItem>
              </List>
            </Box>
            <Box p={1} style={{ margin: 0, padding: 0 }}>
              <List style={{ margin: 0, padding: 0 }}>
                <ListItem>JavaScript</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>JavaScript</ListItem>
              </List>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Typography>
  </Container>
);

const Experience = () => (
  <Container fixed style={{ padding: "7% 0" }}>
    <Typography
      component="div"
      style={{
        backgroundColor: "#cfe811"
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs>
          <Typography variant="h6" gutterBottom style={{ textAlign: "right" }}>
            Experience
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            p={0}
            m={0}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              p={0}
              m={0}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="start"
                p={0}
                m={0}
              >
                <Box p={1}>
                  <Typography variant="subtitle1" gutterBottom>
                    Company Name
                  </Typography>
                </Box>
                <Box p={1}>
                  <Typography variant="body2" gutterBottom>
                    Some Description
                  </Typography>
                </Box>
              </Box>

              <Box p={1}>2017-Present</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              p={0}
              m={0}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="start"
                p={0}
                m={0}
              >
                <Box p={1}>
                  <Typography variant="subtitle1" gutterBottom>
                    Company Name
                  </Typography>
                </Box>
                <Box p={1}>
                  <Typography variant="body2" gutterBottom>
                    Some Description
                  </Typography>
                </Box>
              </Box>

              <Box p={1}>2017-Present</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              p={0}
              m={0}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="start"
                p={0}
                m={0}
              >
                <Box p={1}>
                  <Typography variant="subtitle1" gutterBottom>
                    Company Name
                  </Typography>
                </Box>
                <Box p={1}>
                  <Typography variant="body2" gutterBottom>
                    Some Description
                  </Typography>
                </Box>
              </Box>

              <Box p={1}>2017-Present</Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Typography>
  </Container>
);

const FeaturedProjects = () => (
  <Container fixed style={{ padding: "5% 0" }}>
    <Typography
      component="div"
      style={{
        backgroundColor: "#5f3178"
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs>
          <Typography variant="h6" gutterBottom style={{ textAlign: "right" }}>
            Featured Projects
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <img src={projectImg} width="600px" />
            </Grid>
            <Grid item xs>
              <Typography
                variant="body1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                MyAwesomeProject
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel.
              </Typography>
            </Grid>
          </Grid>
          <div style={{ padding: 40 }} />
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <img src={projectImg} width="600px" />
            </Grid>
            <Grid item xs>
              <Typography
                variant="body1"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                MyAwesomeProject
              </Typography>
              <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Typography>
  </Container>
);

const Blogs = () => (
  <Container fixed style={{ padding: "7% 0" }}>
    <Typography
      component="div"
      style={{
        backgroundColor: "#cfe8fc"
      }}
    >
      <Grid container spacing={8}>
        <Grid item xs>
          <Typography variant="h6" gutterBottom style={{ textAlign: "right" }}>
            Blogs
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="start"
            p={0}
            m={0}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              p={0}
              m={0}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="start"
                p={0}
                m={0}
              >
                <Box p={1}>
                  <Typography variant="subtitle1" gutterBottom>
                    Resolving CocoaPods issues in React Native project
                  </Typography>
                </Box>
                <Box p={1}>
                  <Typography variant="body2" gutterBottom>
                    Published on Aug 4, 2018 · 4 min read
                  </Typography>
                </Box>
              </Box>

              <Box p={1}>Read now</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              p={0}
              m={0}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="start"
                p={0}
                m={0}
              >
                <Box p={1}>
                  <Typography variant="subtitle1" gutterBottom>
                    Resolving CocoaPods issues in React Native project
                  </Typography>
                </Box>
                <Box p={1}>
                  <Typography variant="body2" gutterBottom>
                    Published on Aug 4, 2018 · 4 min read
                  </Typography>
                </Box>
              </Box>

              <Box p={1}>Read now</Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              p={0}
              m={0}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="start"
                p={0}
                m={0}
              >
                <Box p={1}>
                  <Typography variant="subtitle1" gutterBottom>
                    Resolving CocoaPods issues in React Native project
                  </Typography>
                </Box>
                <Box p={1}>
                  <Typography variant="body2" gutterBottom>
                    Published on Aug 4, 2018 · 4 min read
                  </Typography>
                </Box>
              </Box>

              <Box p={1}>Read now</Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Typography>
  </Container>
);

const Footer = () => (
  <Box
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    p={1}
    m={1}
    style={{ paddingTop: "10%" }}
  >
    <Typography variant="body1" gutterBottom>
      Build by Pranit Harekar 2020
    </Typography>{" "}
    <Typography variant="body1" gutterBottom>
      GitHub | Twitter | LinkedIn ☝️
    </Typography>
  </Box>
);

function App() {
  return (
    <div className="App">
      <Intro />
      <Background />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
