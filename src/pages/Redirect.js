import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { logEvent } from '../middleware/logger';

const Redirect = () => {
  const { shortcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const urls = JSON.parse(localStorage.getItem('urls')) || [];
    const match = urls.find((u) => u.shortCode === shortcode);

    if (!match) {
      alert('Shortcode not found');
      navigate('/');
      return;
    }

    const now = new Date();
    if (match.expiry !== 'Never' && new Date(match.expiry) < now) {
      alert('This link has expired');
      navigate('/');
      return;
    }

    match.clicks.push({ timestamp: now.toISOString(), source: document.referrer || 'Direct' });
    localStorage.setItem('urls', JSON.stringify(urls));
    logEvent(`Redirected via ${shortcode}`);
    window.location.href = match.originalUrl;
  }, [shortcode, navigate]);

  return <p>Redirecting...</p>;
};

export default Redirect;
