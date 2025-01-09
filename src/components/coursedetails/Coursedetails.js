import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"; // Cash payment icon

const levels = [
  {
    level: 4,
    units: ["Unit 1: Basics", "Unit 2: Planning", "Unit 3: Communication", "Unit 4: Development", "Unit 5: Final Project"],
  },
  {
    level: 5,
    units: ["Unit 1: Advanced Planning", "Unit 2: Team Dynamics", "Unit 3: Leadership", "Unit 4: Conflict Management", "Unit 5: Implementation"],
  },
  {
    level: 6,
    units: ["Unit 1: Strategy", "Unit 2: Evaluation", "Unit 3: Ethics", "Unit 4: Sustainability", "Unit 5: Thesis"],
  },
];

function Coursedetails() {
  const [activeLevel, setActiveLevel] = useState(null); // Track the active level
  const [deliveryMode, setDeliveryMode] = useState(""); // Track selected delivery mode

  const handleEnrollClick = (level) => {
    setActiveLevel((prev) => (prev === level ? null : level)); // Toggle form visibility
  };

  const handleDeliveryModeChange = (event) => {
    setDeliveryMode(event.target.value); // Update the delivery mode selection
  };

  return (
    <Box
      sx={{
        padding: "40px",
        paddingTop: "120px", // Ensure content starts below the navbar
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      {/* Course Title */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Course Details
      </Typography>

      {/* Levels and Units */}
      <Grid container spacing={4}>
        {levels.map((level) => (
          <Grid item xs={12} sm={6} md={4} key={level.level}>
            <Card
              sx={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderLeft: "5px solid #1976d2", // Left side border color
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
                {/* Level Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    textAlign: "center",
                    color: "#1976d2",
                  }}
                >
                  Level {level.level}
                </Typography>

                {/* Enrollment Form OR Unit List */}
                {activeLevel === level.level ? (
                  <Box
                    component="form"
                    sx={{
                      padding: "15px",
                      backgroundColor: "#f5f5f5",
                      borderRadius: "5px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                      animation: "slide-in 0.3s ease", // Smooth slide-in animation
                    }}
                  >
                    {/* Close Icon */}
                    <IconButton
                      onClick={() => setActiveLevel(null)}
                      sx={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                      }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                      Enrollment Form
                    </Typography>
                    <TextField label="Full Name" variant="outlined" fullWidth margin="normal" required />
                    <TextField label="Email Address" variant="outlined" fullWidth margin="normal" type="email" required />
                    <TextField label="Phone Number" variant="outlined" fullWidth margin="normal" required />

                    {/* Mode of Delivery Selection */}
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Mode of Delivery</InputLabel>
                      <Select
                        value={deliveryMode}
                        onChange={handleDeliveryModeChange}
                        label="Mode of Delivery"
                        required
                      >
                        <MenuItem value="weekdays_offline">Weekdays Offline</MenuItem>
                        <MenuItem value="weekdays_online">Weekdays Online</MenuItem>
                        <MenuItem value="weekend_online">Weekend Online</MenuItem>
                        <MenuItem value="weekend_offline">Weekend Offline</MenuItem>
                      </Select>
                    </FormControl>

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        marginTop: "10px",
                        backgroundColor: "#1976d2",
                        color: "#fff",
                        "&:hover": { backgroundColor: "#1565c0" },
                      }}
                    >
                      Submit
                    </Button>
                  </Box>
                ) : (
                  <List>
                    {level.units.map((unit, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemText primary={unit} />
                      </ListItem>
                    ))}
                  </List>
                )}

                {/* Enroll Button */}
                {!activeLevel && (
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleEnrollClick(level.level)}
                    sx={{
                      marginTop: "15px",
                      backgroundColor: "#1976d2",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#1565c0" },
                    }}
                  >
                    Enroll
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Tutorship Fee Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              borderLeft: "5px solid #1976d2", // Left border with color
              borderRight: "5px solid #1976d2", // Added right border
              "&:hover": {
                transform: "translateY(-10px)",
                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <MonetizationOnIcon
                  sx={{
                    color: "#1976d2",
                    marginRight: "8px",
                    fontSize: "1.8rem",
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#1976d2",
                  }}
                >
                  Tutorship Fees
                </Typography>
              </Box>

              {/* Tutorship Fee Details */}
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "10px",
                    textAlign: "left",
                  }}
                >
                  K35,000.00 PER course for offline lessons in all levels
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "left",
                  }}
                >
                  K30,000.00 PER course for online lessons in all levels
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Coursedetails;
