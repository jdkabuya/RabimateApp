
import { useAccount } from "../../lib/hooks/useAccount"
import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "../../lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Paper, Typography } from "@mui/material";
import TextInput from "../shared/Components/TextInput";
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function LoginForm() {
    const { loginUser } = useAccount();
    const { control, handleSubmit, formState: { isValid, isSubmitting } } = useForm<LoginSchema>({
        mode: 'onTouched',
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = async (data: LoginSchema) => {
        await loginUser.mutateAsync(data);
        console.log(data);
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
                py: 4,
                backgroundImage: 'url(/images/rabbit3.jfif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Paper
                component='form'
                onSubmit={handleSubmit(onSubmit)}
                elevation={8}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 4,
                    gap: 3,
                    width: '100%',
                    maxWidth: 420,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.88)',
                    boxShadow: (theme) => theme.shadows[12]
                }}
            >
                <Box display='flex' alignItems='center' justifyContent='center'
                    gap={2} color='secondary.main'>
                    <LockOpenIcon fontSize="large" />
                    <Typography variant="h4"> Sign in </Typography>
                </Box>
                <TextInput label='Email' control={control} name='email' />
                <TextInput label='Password' type="password" control={control} name='password' />
                <Button
                    type='submit'
                    disabled={!isValid || isSubmitting}
                    variant="contained"
                    size="large"
                >
                    Login
                </Button>
            </Paper>
        </Box>
    )
}