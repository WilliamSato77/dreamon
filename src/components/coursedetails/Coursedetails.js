import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
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
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";

const coursesData = {
  1: {
    title: "Community development",
    levels: [
      { level: 4, units: ["Introduction to community", "Understanding community Development", "Sociology and Social Work", "Working with the vulnerables", "Project Planning"] },
      { level: 5, units: ["Leadership and Conflict", "Capacity Building", "Humanitarian Aid and Crisis Management", "Community Health and Disease Management", "Accessing Project Resources"] },
      { level: 6, units: ["Community and Inter-Agency Working", "Critical Engagement with Social Policy", "Entrepreneurship in Communities", "Reflective Practice", "Project Management"] },
    ],
  },
  2: {
    title: "Computer engineering",
    levels: [
      { level: 4, units: ["Computer Systems", "Computer Security", "Management of Project", "Network Technology", "Software Support"] },
      { level: 5, units: ["Human Computer Interaction", "Server Management", "IT Security Management", "Advanced Networking", "Virtualisation"] },
      { level: 6, units: ["Data Centre Technology", "Concurrent Systems", "Signal Processing", "Digital Systems Engineering", "Cloud Computing"] },
    ],
  },
  3: {
    title: "Computing and information systems",
    levels: [
      { level: 4, units: ["Information Systems", "Programming", "Analysis and Design", "Data Presentation", "Web Technologies"] },
      { level: 5, units: ["Database Systems", "Software Development", "Web Development", "E-commerce Strategy", "IT Strategy"] },
      { level: 6, units: ["Algorithm Design", "Enterprise Architecture", "Security", "IT Project Management", "Scalable Systems"] },
    ],
  },
  4: {
    title: "Human resource management",
    levels: [
      { level: 4, units: ["Introduction to HRM", "Employee Relations", "Organizational Behavior", "Workplace Diversity", "Recruitment and Selection"] },
      { level: 5, units: ["Employee Training and Development", "Compensation Management", "HRM Strategies", "Labor Laws", "Performance Management"] },
      { level: 6, units: ["HR Analytics", "Leadership and Decision Making", "Employee Engagement", "Strategic HRM", "Global HRM"] },
    ],
  },
  5: {
    title: "Business management",
    levels: [
      { level: 4, units: ["Introduction to Business", "Management Principles", "Marketing Fundamentals", "Financial Accounting", "Business Ethics"] },
      { level: 5, units: ["Operations Management", "Business Strategy", "Entrepreneurship", "Organizational Leadership", "Human Resource Management"] },
      { level: 6, units: ["Strategic Management", "Business Analytics", "Global Business", "Supply Chain Management", "Corporate Governance"] },
    ],
  },
};

function Coursedetails() {
  const { id } = useParams();
  const [activeLevel, setActiveLevel] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const course = coursesData[Number(id)];

  const handleEnrollClick = (level) => {
    setActiveLevel((prev) => (prev === level ? null : level));
  };

  const onSubmit = (data) => {
    alert(`Enrollment successful for Level ${activeLevel}:\n${JSON.stringify(data, null, 2)}`);
    reset();
    setActiveLevel(null);
  };

  if (!course) {
    return (
      <Typography variant="h4" sx={{ textAlign: "center", marginTop: "50px" }}>
        Course not found.
      </Typography>
    );
  }

  return (
    <Box sx={{ padding: "40px", paddingTop: "120px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {/* Sticky course content box */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: "#ffffff",
          zIndex: 100,
          padding: "20px 0",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          backgroundImage: "linear-gradient(to right, #1976d2, #1565c0)",
          color: "#ffffff",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "2rem", md: "3rem" },
            textTransform: "capitalize",
            color: "#ffffff",
          }}
        >
          {course.title}
        </Typography>
      </Box>

      {/* Course title below the course content */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "30px",
          fontSize: { xs: "1.5rem", md: "2rem" },
          fontWeight: "bold",
          color: "#1976d2",
        }}
      >
        Levels and Units
      </Typography>

      {/* Course content */}
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
                    fontSize: { xs: "1rem", md: "1.5rem" },
                  }}
                >
                  Level {level.level}
                </Typography>
                {activeLevel === level.level ? (
                  <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
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
                      sx={{ position: "absolute", top: "5px", right: "5px" }}
                    >
                      <CloseIcon />
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        marginBottom: "10px",
                        fontSize: { xs: "1rem", md: "1.2rem" },
                      }}
                    >
                      Enrollment Form
                    </Typography>
                    <TextField
                      {...register("fullName", { required: "Full Name is required" })}
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={!!errors.fullName}
                      helperText={errors.fullName?.message}
                    />
                    <TextField
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Invalid email",
                        },
                      })}
                      label="Email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                    <TextField
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: { value: /^[0-9]{10}$/, message: "Invalid phone" },
                      })}
                      label="Phone"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      error={!!errors.phone}
                      helperText={errors.phone?.message}
                    />
                    <FormControl fullWidth margin="normal">
                      <InputLabel>Mode of Delivery</InputLabel>
                      <Select
                        {...register("mode", { required: "Mode of delivery is required" })}
                        label="Mode of Delivery"
                        defaultValue=""
                      >
                        <MenuItem value="weekdays_offline">Weekdays Offline</MenuItem>
                        <MenuItem value="weekdays_online">Weekdays Online</MenuItem>
                        <MenuItem value="weekend_online">Weekend Online</MenuItem>
                        <MenuItem value="weekend_offline">Weekend Offline</MenuItem>
                      </Select>
                    </FormControl>
                    {errors.mode && (
                      <Typography variant="body2" color="error" sx={{ marginBottom: "10px" }}>
                        {errors.mode.message}
                      </Typography>
                    )}
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      sx={{
                        marginTop: "10px",
                        backgroundColor: "#1976d2",
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
      </Grid>

      {/* Tutorship Fee Structure and Payment Methods */}
      <Grid container spacing={4} sx={{ marginTop: "30px" }}>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              borderLeft: "5px solid #1976d2",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
                  textAlign: "center",
                  color: "#1976d2",
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  marginBottom: "10px",
                }}
              >
                Tutorship Fee Structure
              </Typography>
              <Typography sx={{ marginBottom: "15px" }}>
                The fee structure for the courses is as follows:
              </Typography>
              <Typography sx={{ marginBottom: "10px" }}>
                <strong>Offline:</strong> K35,000 for all courses, all levels
              </Typography>
              <Typography sx={{ marginBottom: "10px" }}>
                <strong>Online:</strong> K30,000 for all courses, all levels
              </Typography>
              <Typography sx={{ marginBottom: "15px" }}>
                <strong>Registration fee:</strong> K5,000.00
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Divider orientation="vertical" flexItem sx={{ marginTop: "30px", marginBottom: "30px" }} />

        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              borderLeft: "5px solid #1976d2",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
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
                  textAlign: "center",
                  color: "#1976d2",
                  fontSize: { xs: "1rem", md: "1.5rem" },
                  marginBottom: "10px",
                }}
              >
                Payment Methods
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Bank Transfer" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Mobile Money" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Credit/Debit Cards" />
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
