import React from "react";

import { Box, Typography } from "@material-ui/core";

interface ISocialAccount {
  name: string;
  link: string;
}

const accounts: ISocialAccount[] = [
  {
    name: "Email",
    link: "mailto:pranitharekar@hotmail.com"
  },
  {
    name: "GitHub",
    link: "https://github.com/pranit-Harekar"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pranitharekar93"
  },
  {
    name: "StackOverflow",
    link: "https://stackoverflow.com/users/6697861/pranit-harekar"
  },
  {
    name: "Medium",
    link: "https://medium.com/@harekarpranit"
  },
  {
    name: "Twitter",
    link: "https://twitter.com/pranitharekar"
  }
];

const handleScrollToTop = () => window.scrollTo(0, 0);

export default () => (
  <>
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-end"
      p={1}
      m={1}
      style={{ paddingBottom: "2%" }}
    >
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ paddingLeft: "5%" }}
      >
        Built with React &{" "}
        <span role="img" className="heart">
          💙
        </span>
        <br />
        by Pranit Harekar ™️ 2020
      </Typography>{" "}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        style={{ paddingRight: "5%" }}
      >
        {accounts.map(account => (
          <Typography
            variant="subtitle1"
            gutterBottom
            style={{ paddingRight: 10 }}
          >
            <a className="customLink" target="_blank" href={account.link}>
              {account.name.toUpperCase()}
            </a>
          </Typography>
        ))}
        <div className="up" onClick={handleScrollToTop}>
          <Typography variant="h5" gutterBottom>
            ☝️
          </Typography>
        </div>
      </Box>
    </Box>
  </>
);
