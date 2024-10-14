import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";

const LoggedInPage = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Fetch the username from sessionStorage
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login"; // Redirect to login after logout
  };

  return (   
           
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >   
    <h1 className="text-2xl">My Account</h1>
      <Paper elevation={3} sx={{ padding: "20px", maxWidth: "400px", width: "100%" }}>
        <Typography variant="h5" gutterBottom>
           <h1 className="text-xl">Created by:</h1>
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "10px" }}>
          <strong>Username:</strong> {username}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Paper>
    </Box>
  );
};

export default LoggedInPage;
