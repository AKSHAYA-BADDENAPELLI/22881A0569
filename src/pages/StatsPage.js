import React from 'react';
import { Typography, Stack, Card, CardContent } from '@mui/material';

const StatsPage = () => {
  const logs = JSON.parse(localStorage.getItem('logs')) || [];
  return (
    <Stack spacing={2} mt={2}>
      <Typography variant="h6" color="primary">Activity Logs</Typography>
      {logs.map((log, idx) => (
        <Card key={idx} variant="outlined" sx={{ borderLeft: '5px solid #1976d2', borderRadius: '1rem' }}>
          <CardContent>
            <Typography variant="caption" color="textSecondary">{log.timestamp}</Typography>
            <Typography>{log.message}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default StatsPage;
