import { Box, Button, Paper, Typography } from "@mui/material";
//import { useRef } from "react";
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useForm } from 'react-hook-form';
//import axios from "axios";
//import { useQuery } from "@tanstack/react-query"
//import { useUsers } from "../../../lib/hooks/useUsers";
import { zodResolver } from '@hookform/resolvers/zod';
import TextInput from "../../shared/Components/TextInput";
//import { type UserSchema, userSchema } from "../../../lib/schemas/userSchema";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useAccount } from "../../../lib/hooks/useAccount";
import { type LoginSchema, loginSchema } from "../../../lib/schemas/loginSchema";
//import { useQuery } from "@tanstack/react-query";
//import agent from "../../../api/agent";
//import { useUsers } from "../../../lib/hooks/useUsers";
//import agent from "../../../api/agent";


export default function Login() {
    //const inputUser = useRef<HTMLInputElement>(null);
    // const { control, reset, handleSubmit } = useForm<UserSchema>({
    //     mode: 'onTouched',
    //     resolver: zodResolver(userSchema)
    // })
    //--------
    const { loginUser } = useAccount();
    const { control, handleSubmit, formState: { isValid, isSubmitting } } = useForm<LoginSchema>({
        mode: 'onTouched',
        resolver: zodResolver(loginSchema)
    });
    //--------
    //const [loggedUser, setLoggedUser] = useState<User>();
    // const [users, setUser] = useState<User[]>([]);
    // const [userName, setUserName] = useState<string>('');
    // const [password, setpassword] = useState<string>('');
    // const [openDialog, setOpenDialog] = React.useState(false);
    //const [closeForm, setCloseForm] = useState(true);
    //const { users, isPending } = useUsers();

    // const { data: users, isPending, error, isError, status } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async () => {
    //         console.log('Feching users ...');
    //         const response = await axios.get<User[]>('/users');
    //         const data = agent.get<User[]>('/users');
    //         console.log('users fetched:', data);
    //         return response.data;
    //     }
    // });
    // console.log({ users, isPending, error, isError, status })
    // useEffect(() => {
    //     axios.get('https://localhost:7192/api/users')
    //         .then(response => setUser(response.data))

    //     if (inputUser.current) {
    //         inputUser.current.focus();
    //     }

    // }, [users, reset]);//

    // const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     //setUserName(e.target.value)
    // };
    // const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     //setpassword(e.target.value)
    // }
    const onSubmit = async (data: LoginSchema) => {
        await loginUser.mutateAsync(data);
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


