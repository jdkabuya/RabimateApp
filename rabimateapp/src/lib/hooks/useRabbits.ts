import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import agent from "../../api/agent";

export const useRabbits = () => {
    const queryClient = useQueryClient();
    const { data: rabbits, isPending } = useQuery({
        queryKey: ['rabbits'],
        queryFn: async () => {
            const response = await agent.get<Rabbit[]>('/rabbits');
            return response.data;
        }
    });

    const updateRabbit = useMutation({
        mutationFn: async (rabbit: Rabbit) => {
            await agent.put('/rabbits', rabbit)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['rabbits']
            })
        }
    })
    return {
        rabbits,
        isPending,
        updateRabbit
    }
}
