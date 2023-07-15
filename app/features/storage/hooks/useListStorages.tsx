import {
  SortDirection,
  SortNulls,
  StorageSortFields,
} from '@app/generated/graphql'

import { useGetStoragesQuery } from '../graphql/queries.generated'

export default function useListStorages() {
  const { data, loading, refetch } = useGetStoragesQuery({
    variables: {
      sorting: [
        {
          field: StorageSortFields.CreatedAt,
          direction: SortDirection.Asc,
          nulls: SortNulls.NullsLast,
        },
      ],
    },
  })

  return {
    refetch,
    data,
    loading,
  }
}
