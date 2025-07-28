import React, { useState } from 'react';
import ShortenerForm from '../components/ShortenerForm';
import URLList from '../components/URLList';

const HomePage = () => {
  const [refresh, setRefresh] = useState(false);
  return (
    <>
      <ShortenerForm onShorten={() => setRefresh(!refresh)} />
      <URLList key={refresh} />
    </>
  );
};

export default HomePage;