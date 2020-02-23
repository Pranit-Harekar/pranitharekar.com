import React from "react";

import { Container, Link, Typography } from "@material-ui/core";

export default () => (
  <Container fixed style={{ padding: "7% 0 10% 0" }}>
    <Typography component="div">
      <Typography
        variant="h3"
        gutterBottom
        style={{
          paddingBottom: "10%"
        }}
      >
        Hello!{" "}
        <span role="img" className="wave" aria-label="">
          👋
        </span>
      </Typography>
      <Typography
        variant="h3"
        gutterBottom
        style={{
          paddingBottom: "10%",
          maxWidth: "60%"
        }}
      >
        I'm <b>Pranit Harekar</b>, a Software Developer living in Boston. I
        build awesome mobile & web apps{" "}
        <span role="img" aria-label="">
          🧑‍💻
        </span>
      </Typography>
      <Typography variant="h5" gutterBottom>
        Get in touch{" "}
        <span aria-label="" role="img" className="horizontal">
          👉
        </span>{" "}
        <Link
          color="textPrimary"
          className="customLink"
          target="_blank"
          href="mailto:pranitharekar@hotmail.com"
        >
          pranitharekar@hotmail.com
        </Link>
      </Typography>
    </Typography>
  </Container>
);
