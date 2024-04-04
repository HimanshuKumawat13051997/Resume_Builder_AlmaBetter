import { Button, Grid, Paper } from "@mui/material";
import "../App.css";

export function ClickMe({ props }) {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "750px",
        width: { xs: "300px", sm: "500px", md: "550px" },
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Grid
        container
        sx={{
          height: "inherit",
          width: "inherit",
        }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Button
          sx={{ height: "50px", width: "120px" }}
          variant="contained"
          size="small"
          onClick={() => props.handleDeleteResume(props.index)}
        >
          Delete
        </Button>
        <Button
          sx={{ height: "50px", width: "120px" }}
          variant="contained"
          size="small"
          onClick={() => props.handleSave(props.index)}
        >
          Download
        </Button>
      </Grid>
    </Paper>
  );
}
