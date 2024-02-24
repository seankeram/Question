import { Box } from "@mui/material";

const MotionBar = ({ width }) => {
  if (width === 110) {
    return (
      <Box
        sx={{
          width: " 100%",
          border: "solid",
          borderRadius: "16px",
          borderColor: "#a2cf6e",
          marginBottom: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#a2cf6e",
            height: 10,
            borderRadius: "16px",
            width: "100%",
            cursor: "pointer",
          }}
        ></Box>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          width: " 100%",
          border: "solid",
          borderRadius: "16px",
          borderColor: "#2979ff",
        }}
      >
        <Box
          sx={{
            boxShadow: 2,
            backgroundColor: "#2979ff",
            height: 10,
            width: `${width}%`,
            cursor: "pointer",
            opacity: 1,

            transition: "width 0.5s linear ", // Add transition property for smooth animation
          }}
        ></Box>
      </Box>
    );
  }
};
export default MotionBar;
