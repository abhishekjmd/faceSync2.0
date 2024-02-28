import { Box, FormControl, Link, TextField, Typography } from "@mui/material";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../utils/Theme";

const StudentsLogin = () => {
  return (
    <Box
      sx={{
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          width: SCREEN_WIDTH * 0.4,
          height: SCREEN_HEIGHT * 0.8,
          backgroundColor: "#0F0F0F",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{}}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 48,
              textTransform: "uppercase",
              color: "white",
            }}
          >
            login page
          </Typography>
        </Box>
        <Box
          sx={{
            width: 500,
            backgroundColor: "#0000001A",
            marginTop: 8,
          }}
        >
          <FormControl fullWidth>
            <TextField
              label="Enter username"
              InputLabelProps={{
                style: { color: "white" }, // Directly style the label
              }}
              sx={{
                backgroundColor: "#D9D9D91A",
                color: "white",
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  // This targets the label
                  color: "white", // Ensure the label is white
                },
                "& .Mui-focused": {
                  color: "white", // Ensure label remains white when focused
                },
              }}
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            width: 500,
            backgroundColor: "#0000001A",
            marginTop: 5,
            boxShadow: "0px 4px 4px 0px #00000040",
          }}
        >
          <FormControl fullWidth>
            <TextField
              InputLabelProps={{
                style: { color: "white" }, // Directly style the label
              }}
              sx={{
                backgroundColor: "#D9D9D91A",
                color: "white",
                "& .MuiInputBase-input": {
                  color: "white",
                },
                "& .MuiInputLabel-root": {
                  // This targets the label
                  color: "white", // Ensure the label is white
                },
                "& .Mui-focused": {
                  color: "white", // Ensure label remains white when focused
                },
              }}
              label="Enter Password"
              name="password"
            />
          </FormControl>
        </Box>
        <Box
          sx={{
            width: 500,
            marginTop: 2,
            fontWeight: 700,
            fontSize: 20,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography sx={{ color: "white" }}>
            Forget your Password?&nbsp;
            <Link
              component="button"
              sx={{ color: "white", fontWeight: 700, fontSize: 18 }}
              underline="always"
            >
              Click here
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            width: 350,
            height: 70,
            backgroundColor: "#FFFFFFCC",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
            borderRadius: 20,
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 36,
              textTransform: "uppercase",
              color: "black",
            }}
          >
            Login
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentsLogin;
