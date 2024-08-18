import React from 'react';
import { Box, styled } from '@mui/material'; // Import styled and Box from MUI
import Home from "./pages/Home";
import background from './images/background2.jpg'; // Adjusted path assuming it's inside src/images

const Image = styled(Box)({
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

function App() {
  return (
    <Image>
      <Home />
    </Image>
  );
}

export default App;
