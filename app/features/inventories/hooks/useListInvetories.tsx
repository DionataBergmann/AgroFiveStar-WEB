import {
  InventorySortFields,
  SortDirection,
  SortNulls,
} from '@app/generated/graphql'

import { useGetInventoriesQuery } from '../graphql/queries.generated'

export default function useListInventories() {
  const { data, loading, refetch } = useGetInventoriesQuery({
    variables: {
      sorting: [
        {
          field: InventorySortFields.CreatedAt,
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
