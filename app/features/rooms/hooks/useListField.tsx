import {
  FieldSortFields,
  SortDirection,
  SortNulls,
} from '@app/generated/graphql'

import { useGetFieldsQuery } from '../graphql/queries.generated'

export default function useListFields() {
  const { data, loading, refetch } = useGetFieldsQuery({
    variables: {
      sorting: [
        {
          field: FieldSortFields.CreatedAt,
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
