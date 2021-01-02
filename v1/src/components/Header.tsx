import React from "react";

import { Box } from "@material-ui/core";
import Switch from "./Switch";

interface ISwitchProps {
  checked: boolean;
  onChecked: () => void;
}

export default ({ checked, onChecked }: ISwitchProps) => (
  <Box
    display="flex"
    flexDirection="row"
    justifyContent="flex-end"
    p={1}
    m={1}
    style={{ paddingBottom: "2%" }}
  >
    <Switch checked={checked} onChange={onChecked} value="checkedA" />
  </Box>
);
