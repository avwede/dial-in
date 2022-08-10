import * as React from 'react';
import "./HomePage.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#E2C8A3',
      contrastText: '#fff',
    },
  },
});

function HomePage() {
    return (
        <div className="hero">
            <img className="logo" src="/images/dial-in-white-non-transparent.png" alt="logo" />
            <img className="hero-img" src="/images/espresso.jpg" alt="espresso" />
            <div className="hero-title">
                <h1>Dial In</h1>
                <p>Perfecting your espresso shot</p>

                <ThemeProvider theme={theme}>
                    <Stack spacing={2} direction="row">
                        <Button size="large" color="neutral" variant="contained">
                            Get Started
                        </Button>
                        <Button size="large" color="neutral" variant="contained">
                            About
                        </Button>
                    </Stack>
                </ThemeProvider>

            </div>   
        </div>
    );
}

export default HomePage;