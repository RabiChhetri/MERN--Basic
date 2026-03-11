import {QueryClient,QueryClientProvider,useQuery} from '@tanstack/react-query'

const queryClinet=new QueryClient()

export default function QueryProvider({Children}){
    <QueryProvider client={queryClinet}>
        {Children}
    </QueryProvider>
}