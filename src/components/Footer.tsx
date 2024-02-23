import { Container, Typography } from "@material-ui/core";
import React from "react";

import CypressLogo from "../components/SvgCypressLogo";

export default function Footer() {
  return (
    <Container maxWidth="sm" style={{ marginTop: 50 }}>
      <Typography variant="body2" color="textSecondary" align="center">
        Hamed Jafari
      </Typography>
    </Container>
  );
}
