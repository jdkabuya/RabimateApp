import { Box, Button, Paper, Typography } from "@mui/material";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from "../../shared/Components/TextInput";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useAccount } from "../../../lib/hooks/useAccount";
import { type LoginSchema, loginSchema } from "../../../lib/schemas/loginSchema";

export default function Login() {
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


    // const handleLogin = async () => {
    //     //setLoggedUser(users)

    //     console.log(users);
    //     const loggedUser = users.find(x => x.email.toLowerCase() == userName.toLowerCase() && x.password.toLowerCase() == password.toLowerCase())

    //     console.log(loggedUser);

    //     if (loggedUser === undefined) {

    //         // setOpenDialog(true)
    //     }
    //     else {
    //         // setOpenDialog(false)
    //     }
    // }
    // const onSubmit = (data: UserSchema) => {
    //     console.log(data);
    // }
    return (
        <>
            {/* <Navbar /> */}
            {/* {isPending ? (
                <Typography>Loading...</Typography>
            ) : ""} */}

            <Paper
                component='form'
                onSubmit={handleSubmit(onSubmit)}
            >
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}

                <Box display="flex" flexDirection={"row"}
                    maxWidth={600}
                    justifyContent={"center"}
                    padding={5}
                    bgcolor={"#d2c9bb"}
                    margin="auto"
                    boxShadow={"5px 5px 10px #926841"}
                    borderRadius={2}
                >
                    <Box display="flex"
                        flexDirection={"column"}
                        maxWidth={300}
                        alignContent={"center"}
                        justifyContent={"center"}
                        padding={3}
                        boxShadow={"5px 5px 10px #ccc"}
                        bgcolor={"#fff"}
                        sx={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}
                    >
                        <Box display='flex' alignItems='center'
                            justifyContent='center'
                            gap={0.5}
                            color='#926841'
                        >
                            <LockOpenIcon fontSize="small" />
                            <Typography variant="h6" align="center" >
                                Login
                            </Typography>
                        </Box>
                        <TextInput id="txtusername"
                            label='Email'
                            control={control}
                            name="email"
                            size='small'
                            sx={{ mb: 1 }} autoComplete="off" />
                        <TextInput id="txtpassword" label='Password'
                            control={control}
                            name="password"
                            size='small' type="password" sx={{ mb: 1 }} autoComplete="off" />
                        <Button type="submit"
                            disabled={!isValid || isSubmitting}
                            variant="contained"
                            //onClick={handleLogin}
                            sx={{ backgroundColor: "#926841" }}
                        >
                            Login
                        </Button>

                        <Button variant="text" sx={{ '&:focus': { outline: 'none' }, marginTop: 1, textTransform: "none" }}>Forgot password</Button>
                    </Box>
                    <Box display="flex"
                        flexDirection={"column"}
                        maxWidth={300}
                        alignContent={"center"}
                        bgcolor={"#926841"}
                        component={"img"}
                        src={`public/images/rabbit4.jfif`}
                        sx={{ borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
                    >
                    </Box>
                </Box>
                {/* </form> */}
            </Paper>
        </>
    )
}


