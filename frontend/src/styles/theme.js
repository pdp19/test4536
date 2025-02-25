import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5',  // Light grey background for the entire app
      paper: '#e0e0e0',    // Slightly darker grey for secondary sections
    },
    primary: {
      main: '#4a90e2',      // Soft blue for primary buttons
    },
    secondary: {
      main: '#82b1ff',      // Lighter soft blue for secondary buttons
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    h3: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#333',        // Darker color for headings
    },
    button: {
      textTransform: 'none', // Prevent uppercase text on buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '50px',  // Fully rounded buttons with balanced border-radius
        },
        containedPrimary: {
          backgroundColor: '#4a90e2',    // Soft blue color for primary buttons
          '&:hover': {
            backgroundColor: '#357ab8',  // Darker soft blue on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#82b1ff',    // Lighter soft blue for secondary buttons
          '&:hover': {
            backgroundColor: '#669aff',  // Darker shade on hover
          },
        },
      },
    },
  },
});

export default theme;
