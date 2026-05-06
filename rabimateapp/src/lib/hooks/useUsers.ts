import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import agent from "../../api/agent";

//this a custom hook
export const useUsers = () => {
    const queryClient = useQueryClient();
    const { data: users, isPending } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            console.log('Feching users ...');
            //const response = await agent.get<User[]>('/users');
            const data = await agent.get<User[]>('/users');
            console.log('users fetched:', data);
            return data;
        }
    });

    const updateUser = useMutation({
        mutationFn: async (user: User) => {
            await agent.put('/users', user)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['users']
            })
        }
    })
    return {
        users,
        isPending,
        updateUser
    }

}