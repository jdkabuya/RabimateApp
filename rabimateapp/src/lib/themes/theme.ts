import { createTheme } from '@mui/material/styles';

export const rabbitryTheme = createTheme({
    palette: {
        background: {
            default: '#faf6f1', // Soft warm white
            paper: '#ffffff',   // Clean card backgrounds
        },
        primary: {
            main: '#926841',    // Rich rabbit brown
            contrastText: '#faf6f1',
        },
        secondary: {
            main: '#d2c9bb',    // Warm beige accent
            contrastText: '#333333',
        },
        text: {
            primary: '#333333',  // Charcoal
            secondary: '#666666',
        },
        // Custom colors for gender identification
        info: { main: '#7ea1c4' },  // Buck Blue
        error: { main: '#e19cb9' }, // Doe Pink
    },
    typography: {
        fontFamily: '"Segoe UI", "Roboto", "Helvetica", sans-serif',
        h5: { fontWeight: 700 },
        h6: { fontWeight: 600 },
    },
});