import { useListUsersQuery } from '../graphql/queries.generated'

export default function useListUsers() {
  const { data, loading, refetch } = useListUsersQuery()

  return {
    refetch,
    data,
    loading,
  }
}
