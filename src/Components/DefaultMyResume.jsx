import { Box, Button, Typography } from "@mui/material";
import SentimentVeryDissatisfiedSharpIcon from "@mui/icons-material/SentimentVeryDissatisfiedSharp";
import { Link } from "react-router-dom";

export function DefaultMyResume() {
  return (
    <Box
      sx={{
        marginTop: "100px",
        marginBottom: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          textAlign: "justify",
          fontSize: {
            xs: "24px",
            sm: "36px",
            md: "48px",
          },
          fontFamily: `"Poppins", sans-serif`,
          fontWeight: 600,
        }}
      >
        OOPS! You Did Not Created a Resume Yet
      </Typography>
      <SentimentVeryDissatisfiedSharpIcon
        sx={{
          fontSize: "100px",
        }}
      />
      <Button
        variant="contained"
        size="large"
        type="submit"
        color="warning"
        sx={{ marginTop: "20px" }}
        LinkComponent={Link}
        to={"/"}
      >
        Click to Create One
      </Button>
    </Box>
  );
}
