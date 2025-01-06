import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#1976d2', color: 'white', padding: '20px', textAlign: 'center' }}>
      <p>Follow us on:</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <Facebook style={{ color: 'white' }} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <Twitter style={{ color: 'white' }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <Instagram style={{ color: 'white' }} />
        </a>
      </div>
      <p>Email: info@dreamon.com | Location: 123 DreamOn Lane</p>
    </footer>
  );
}

export default Footer;
