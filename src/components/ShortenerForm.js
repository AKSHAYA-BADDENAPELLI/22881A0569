import React, { useState } from 'react';
import { TextField, Button, Stack, Paper } from '@mui/material';
import { logEvent } from '../middleware/logger';

const ShortenerForm = ({ onShorten }) => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [expiryTime, setExpiryTime] = useState('');

  const handleSubmit = () => {
    if (!originalUrl.startsWith('http')) {
      alert('Please enter a valid URL with http/https');
      return;
    }
    const shortCode = customCode || Math.random().toString(36).substring(2, 8);
    const expiry = expiryTime || new Date(Date.now() + 30 * 60 * 1000).toISOString();

    const newEntry = {
      originalUrl,
      shortCode,
      createdAt: new Date().toISOString(),
      expiry,
      clicks: [],
    };
    const existing = JSON.parse(localStorage.getItem('urls')) || [];
    existing.push(newEntry);
    localStorage.setItem('urls', JSON.stringify(existing));
    logEvent(`URL shortened: ${shortCode}`);
    onShorten();
    setOriginalUrl('');
    setCustomCode('');
    setExpiryTime('');
  };

  return (
    <Paper elevation={2} style={{ padding: '1.5rem' }}>
      <Stack spacing={2}>
        <TextField
          label="Original URL"
          fullWidth
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <TextField
          label="Custom Shortcode (optional)"
          fullWidth
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
        />
        <TextField
          label="Expiry Time (optional)"
          fullWidth
          placeholder="e.g. 2025-12-31"
          value={expiryTime}
          onChange={(e) => setExpiryTime(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit} sx={{ backgroundColor: '#1976d2' }}>Shorten</Button>
      </Stack>
    </Paper>
  );
};

export default ShortenerForm;