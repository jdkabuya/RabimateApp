import CrueltyFreeIcon from '@mui/icons-material/CrueltyFree';
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router";

export default function Navbar() {
    const location = useLocation();

    const navItems = [
        { label: 'Rabbits (List)', path: '/rabbits' },
        { label: 'Rabbits (Dashboard)', path: '/rabbits-dashboard' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <Box>
            <AppBar position='fixed' elevation={0} color="transparent" sx={{ backgroundColor: '#faf6f1' }}>
                <Toolbar>
                    <CrueltyFreeIcon sx={{ color: '#926841', marginRight: 1 }} />
                    <Typography variant="h6" sx={{ color: '#926841', fontWeight: 'bold', flexGrow: 1 }}>
                        Rabimate
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {navItems.map((item) => (
                            <Button
                                key={item.path}
                                component={RouterLink}
                                to={item.path}
                                sx={{
                                    color: isActive(item.path) ? '#fff' : '#926841',
                                    backgroundColor: isActive(item.path) ? '#926841' : 'transparent',
                                    borderRadius: 1,
                                    padding: '8px 16px',
                                    fontWeight: isActive(item.path) ? 'bold' : 'normal',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#926841',
                                        color: '#fff',
                                    },
                                }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}