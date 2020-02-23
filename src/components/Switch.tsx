import React from "react";

import { Switch, withStyles } from "@material-ui/core";
import { orange } from "@material-ui/core/colors";

export default withStyles({
  switchBase: {
    color: orange[300],
    "&$checked": {
      color: orange[500]
    },
    "&$checked + $track": {
      backgroundColor: orange[500]
    }
  },
  checked: {},
  track: {}
})(Switch);
