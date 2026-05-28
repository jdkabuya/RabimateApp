import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { LoginSchema } from "../schemas/loginSchema"
import agent from "../../api/agent";

export const useAccount = () => {
    const queryClient = useQueryClient();
    const { data: currentUser, isPending } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await agent.get<User>('/account/user-info');
            //console.log(`Current user is: ${response.data.firstname}`);
            //console.log('API URL:', import.meta.env.VITE_API_URL);
            return response.data;
        }
    })

    const loginUser = useMutation({
        mutationFn: async (creds: LoginSchema) => {
            await agent.post('/login?useCookies=true', creds);//           //await agent.post('/login?useCookies=true', creds);//
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['user']
            })
        }
    });

    return {
        loginUser,
        currentUser,
        isPending
    }
}