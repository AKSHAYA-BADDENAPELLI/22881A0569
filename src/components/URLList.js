import React from 'react';
import { Typography, Card, CardContent, Stack, Link } from '@mui/material';

const URLList = () => {
  const urls = JSON.parse(localStorage.getItem('urls')) || [];

  return (
    <Stack spacing={2} mt={4}>
      {urls.map((u, i) => (
        <Card key={i} variant="outlined" sx={{ borderRadius: '1rem' }}>
          <CardContent>
            <Typography>
              <strong>Shortcode:</strong>{' '}
              <Link href={`/${u.shortCode}`} target="_blank" rel="noopener noreferrer">
                {u.shortCode}
              </Link>
            </Typography>
            <Typography><strong>Original URL:</strong> {u.originalUrl}</Typography>
            <Typography><strong>Expiry:</strong> {new Date(u.expiry).toLocaleString()}</Typography>
            <Typography><strong>Clicks:</strong> {u.clicks.length}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default URLList;