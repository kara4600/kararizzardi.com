import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#111111',
    },
    text: {
      primary: '#ffffff',
      secondary: '#abb7c7',
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default defaultTheme;
