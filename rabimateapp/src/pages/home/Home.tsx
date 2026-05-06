import CrueltyFreeIcon from '@mui/icons-material/CrueltyFree';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import RabbitList from '../Rabbits/RabbitList';


export default function Home() {
    return (
        <Box>
            <AppBar position='fixed' elevation={0} sx={{ background: '#d2c9bb' }}>
                <Toolbar>
                    <CrueltyFreeIcon />
                    <Typography variant="h6" color='#926841' component="div" sx={{ flexGrow: 1 }}>
                        Rabimate
                    </Typography>
                    <Button variant='contained' sx={{ '&:focus': { outline: 'none' }, bgcolor: '#926841' }}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <div>
                <RabbitList />
            </div>
        </Box>
    )
}