import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, CssBaseline, Typography, Paper } from '@mui/material';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';
import Redirect from './pages/Redirect';

function App() {
  return (
    <>
      <CssBaseline />
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem', borderRadius: '1rem' }}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom style={{ fontWeight: 'bold', color: '#1976d2' }}>
            Akshaya's URL Shortener
          </Typography>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stats" element={<StatsPage />} />
            <Route path="/:shortcode" element={<Redirect />} />
          </Routes>
        </Container>
      </Paper>
    </>
  );
}

export default App;