import {
  SortDirection,
  SortNulls,
  TaskSortFields,
} from '@app/generated/graphql'

import { useGetTasksQuery } from '../graphql/queries.generated'

export default function useListTasks() {
  const { data, loading, refetch } = useGetTasksQuery({
    variables: {
      sorting: [
        {
          field: TaskSortFields.CreatedAt,
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
