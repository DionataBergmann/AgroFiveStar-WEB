import { useMeLazyQuery } from '../graphql/queries.generated'

export default function useMeLazy() {
  const [getMe, { data, refetch, loading }] = useMeLazyQuery()

  return {
    getMe,
    data,
    refetch,
    loading,
  }
}
