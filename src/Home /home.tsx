import { Box, ListItemButton, ListItemText, Typography } from "@mui/material";
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
      <Typography
        sx={{
          fontWeight: "bold",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginY: 5,
        }}
      >
        programming question
      </Typography>
      <ListItemButton
        component="a"
        href="/example"
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "",
          height: "90px",
          alignItems: "center",
          textAlign: "center",
          margin: 1,
          padding: 4,
          borderRadius: 4,
          backgroundColor: "#e0f2f1 ",
        }}
      >
        <ListItemText primary="javascreept question" />
      </ListItemButton>
      <ListItemButton
        component="a"
        href="#"
        sx={{
          display: "flex",
          height: "90px",
          margin: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          borderRadius: 4,
          backgroundColor: "#e0f2f1 ",
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
          height: "90px",
          margin: 1,
          alignItems: "center",
          textAlign: "center",
          borderRadius: 4,
          backgroundColor: "#e0f2f1 ",
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
          height: "90px",
          margin: 1,
          alignItems: "center",
          textAlign: "center",
          borderRadius: 4,
          backgroundColor: "#e0f2f1 ",
          padding: 4,
        }}
      >
        <ListItemText primary="react question" />
      </ListItemButton>
    </Box>
  );
};
