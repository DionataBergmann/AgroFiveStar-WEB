import {
  ProductionSortFields,
  SortDirection,
  SortNulls,
} from '@app/generated/graphql'

import { useGetProductionsQuery } from '../graphql/queries.generated'

export default function useListProductions() {
  const { data, loading, refetch } = useGetProductionsQuery({
    variables: {
      sorting: [
        {
          field: ProductionSortFields.CreatedAt,
          direction: SortDirection.Desc,
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
