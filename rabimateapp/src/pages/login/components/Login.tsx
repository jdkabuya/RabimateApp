import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from "../../shared/Components/TextInput";
import { useAccount } from "../../../lib/hooks/useAccount";
import { type LoginSchema, loginSchema } from "../../../lib/schemas/loginSchema";
import { Box, Button, Checkbox, FormControlLabel, Link, Typography } from "@mui/material";
//import CrueltyFreeIcon from '@mui/icons-material/CrueltyFree';
export default function Login() {
    //const theme = useTheme();
    const { loginUser } = useAccount();
    const { control, handleSubmit, formState: { isValid, isSubmitting } } = useForm<LoginSchema>({
        mode: 'onTouched',
        defaultValues: { email: '', password: '' },
        resolver: zodResolver(loginSchema)
    });
    const onSubmit = async (data: LoginSchema) => {
        await loginUser.mutateAsync(data);
        console.log(data);
    }

    return (
        <Box sx={{ display: 'flex', height: '100vh', width: '100vw', bgcolor: 'background.default' }}>

            {/* Visual Left Pane (Rabbit Image) */}
            <Box
                sx={{
                    flex: 1,
                    display: { xs: 'none', md: 'block' },
                    backgroundImage: `url('/images/rabbit-image1.jfif')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    margin: 0,
                    padding: 0,
                }}
            />

            {/* Form Right Pane */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // alignItems: 'center',
                    px: { xs: 4, sm: 8, md: 12 },
                    bgcolor: 'background.paper',
                }}
            >
                {/* <Box sx={{ mb: 4 }}>
                    <Box display='flex' alignItems='center' justifyContent='center' gap={0.1} color='#070400'>
                        <CrueltyFreeIcon />
                        <Typography variant="h6" color='#926841' component="div" sx={{ flexGrow: 1 }}>
                            Rabimate
                        </Typography>
                    </Box>
                </Box> */}
                <Box display='flex' flexDirection='column' alignItems='center'>
                    <Typography variant="h4" color="#926841" sx={{ mb: 3, fontWeight: 700 }}>
                        Sign In
                    </Typography>
                </Box>

                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <TextInput
                        id="txtusername"
                        label="Email Address"
                        type="email"
                        control={control}
                        name="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'background.default' } }}
                    />
                    <TextInput
                        label="Password"
                        type="password"
                        control={control}
                        name="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        sx={{ '& .MuiOutlinedInput-root': { bgcolor: 'background.default' } }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
                        <FormControlLabel
                            control={<Checkbox defaultChecked sx={{ color: '#926841', '&.Mui-checked': { color: '#926841' } }} />}
                            label="Remember me"
                        />
                        <Link href="#" variant="body2" color="primary.main" underline="hover">
                            Forgot Password?
                        </Link>
                    </Box>

                    <Button
                        type="submit"
                        disabled={!isValid || isSubmitting}
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{ py: 1.5, mt: 2, fontWeight: 'bold', backgroundColor: '#926841', '&:hover': { backgroundColor: '#7a5032' } }}
                    >
                        Log In
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

