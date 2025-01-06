import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Contact() {
  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>Contact Us</h1>
      <form style={{ display: 'inline-block', textAlign: 'left' }}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Contact;
