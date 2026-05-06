// import Menu from "@mui/icons-material/Menu";
//import Menu from "@mui/icons-material/Menu";
import CrueltyFreeIcon from '@mui/icons-material/CrueltyFree';
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
export default function Navbar() {
    return (
        <Box>
            <AppBar position='fixed' elevation={0} color="transparent">
                <Toolbar>
                    <CrueltyFreeIcon />
                    <Typography variant="h6" color='#926841' component="div" sx={{ flexGrow: 1 }}>
                        Rabimate
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}