import { useListUsersQuery } from '../graphql/queries.generated'

export default function useListUsers(userId?: string) {
  const { data, loading, refetch } = useListUsersQuery()

  if(userId){
   refetch({filter:{
       id: {eq: userId}
   }})
  }

  return {
    refetch,
    data,
    loading,
  }
}
