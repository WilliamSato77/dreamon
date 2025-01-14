import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"; // Cash icon
import PaymentsIcon from "@mui/icons-material/Payments"; // Payments icon
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"; // Bank icon
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid"; // Mobile payment icon

const coursesData = {
  1: {
    title: "Community Development",
    levels: [
      {
        level: 4,
        units: [
          "Introduction to community",
          "Understanding community Development",
          "Sociology and Social Work",
          "Working with the vulnerables",
          "Project Planning",
        ],
      },
      {
        level: 5,
        units: [
          "Leadership and Conflict",
          "Capacity Building and Sustainability in Communities",
          "Humanitarian Aid and Crisis Management",
          "Community Health and Disease Management",
          "Accessing and Managing Project Resources",
        ],
      },
      {
        level: 6,
        units: [
          "Community and Inter-Agency Working",
          "Critical Engagement with Social Policy",
          "Entrepreneurship in Communities",
          "Reflective Practice",
          "Project Management",
        ],
      },
    ],
  },
  2: {
    title: "Computer Engineering",
    levels: [
      {
        level: 4,
        units: [
          "Computer Systems",
          "Computer Security",
          "Management of Project",
          "Network Technology",
          "Personal Computer Software Support",
        ],
      },
      {
        level: 5,
        units: [
          "Human Computer Interaction",
          "Internet Server Management",
          "IT Security Management",
          "Advanced Networking Technology",
          "IT Virtualisation",
        ],
      },
      {
        level: 6,
        units: [
          "Data Centre Technology",
          "Distributed and Concurrent Systems",
          "VLSI Design and Signal Processing",
          "Embedded and Digital Systems Engineering",
          "Cloud Computing and Operating Systems",
        ],
      },
    ],
  },
  // Other courses...
};

function Coursedetails() {
  const { id } = useParams(); // Retrieve course ID from route parameters
  const [activeLevel, setActiveLevel] = useState(null);
  const [deliveryMode, setDeliveryMode] = useState("");

  const course = coursesData[Number(id)]; // Convert `id` to a number before accessing `coursesData`

  const handleEnrollClick = (level) => {
    setActiveLevel((prev) => (prev === level ? null : level));
  };

  const handleDeliveryModeChange = (event) => {
    setDeliveryMode(event.target.value);
  };

  if (!course) {
    return (
      <Typography variant="h4" sx={{ textAlign: "center", marginTop: "50px" }}>
        Course not found.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        padding: "40px",
        paddingTop: "120px",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        {course.title} - Levels and Units
      </Typography>

      <Grid container spacing={4}>
        {course.levels.map((level) => (
          <Grid item xs={12} sm={6} md={4} key={level.level}>
            <Card
              sx={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                borderLeft: "5px solid #1976d2",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardContent>
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

                {activeLevel === level.level ? (
                  <Box
                    component="form"
                    sx={{
                      padding: "15px",
                      backgroundColor: "#f5f5f5",
                      borderRadius: "5px",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                    }}
                  >
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
                        <ListItemText primary={`Unit ${index + 1}: ${unit}`} />
                      </ListItem>
                    ))}
                  </List>
                )}

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
              backgroundColor: "#e3f2fd",
              borderLeft: "5px solid #1976d2",
              "&:hover": {
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <MonetizationOnIcon sx={{ fontSize: "2rem", color: "#1976d2", marginRight: "8px" }} />
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1976d2" }}>
                  Tutorship Fee
                </Typography>
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <Typography>Offline: K35,000.00 per unit for all levels</Typography>
              <Typography>Online: K35,000.00 per unit for all levels</Typography>
              <Typography>Registration fee: K5000.00</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Payment Methods Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              backgroundColor: "#f1f8e9",
              borderLeft: "5px solid #4caf50",
              "&:hover": {
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <PaymentsIcon sx={{ fontSize: "2rem", color: "#4caf50", marginRight: "8px" }} />
                <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4caf50" }}>
                  Payment Methods
                </Typography>
              </Box>
              <Divider sx={{ marginY: 2 }} />
              <List>
                <ListItem>
                  <AccountBalanceIcon sx={{ color: "#4caf50", marginRight: "8px" }} />
                  <ListItemText primary="National Bank: 1002298728" />
                </ListItem>
                <ListItem>
                  <AccountBalanceIcon sx={{ color: "#4caf50", marginRight: "8px" }} />
                  <ListItemText primary="Standard Bank: 9100001812685" />
                </ListItem>
                <ListItem>
                  <PhoneAndroidIcon sx={{ color: "#4caf50", marginRight: "8px" }} />
                  <ListItemText primary="TNM Mpamba: 0884584374" />
                </ListItem>
                <ListItem>
                  <PhoneAndroidIcon sx={{ color: "#4caf50", marginRight: "8px" }} />
                  <ListItemText primary="Airtel Money: 0997267718" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Coursedetails;
