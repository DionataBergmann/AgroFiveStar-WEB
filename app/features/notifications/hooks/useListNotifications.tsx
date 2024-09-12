import {
  NotificationSortFields,
  SortDirection,
} from '@app/generated/graphql'
import { useGetNotificationsQuery } from '../graphql/queries.generated'

export default function useListNotifications() {
  const { data, loading, refetch } = useGetNotificationsQuery({
    variables: {
      sorting: [
        {
          field: NotificationSortFields.Title,
          direction: SortDirection.Asc,
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
