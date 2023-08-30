import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material/';

function App () {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (<div className='app'>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box width="100%" height="100%" padding="1rem 2 rem 4rem 2rem">
      <Routes>
        <Route path="/" element={<div>Dashboard Page</div>} />
        <Route path="/predictions" element={<div>Predictions</div>} />
      </Routes>
      </Box>
    </ThemeProvider>
    </BrowserRouter>
  </div>
  );
}

export default App;


