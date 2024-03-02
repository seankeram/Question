import { Box, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

export const Home = () => {
  return (
    <Box
      sx={{
        display: "  flex",
        justifyContent: "center",
        justifyItems: "center",
        flexDirection: "column",
        padding: 4,
        textTransform: "uppercase",
        fontWeight: "bold",
      }}
    >
      <ListItemButton
        component="a"
        href="/example"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 4,
        }}
      >
        <ListItemText primary="javascreept question" />
      </ListItemButton>
      <ListItemButton
        component="a"
        href="#"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ListItemText primary="html question" />
      </ListItemButton>
      <ListItemButton
        component="a"
        href="#"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 4,
        }}
      >
        <ListItemText primary="css question" />
      </ListItemButton>
      <ListItemButton
        component="a"
        href="#"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 4,
        }}
      >
        <ListItemText primary="react question" />
      </ListItemButton>
    </Box>
  );
};
