import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetTasksQueryVariables = Types.Exact<{
  filter?: Types.Maybe<Types.TaskFilter>;
  sorting?: Types.Maybe<Array<Types.TaskSort> | Types.TaskSort>;
  paging?: Types.Maybe<Types.OffsetPaging>;
}>;


export type GetTasksQuery = (
  { __typename?: 'Query' }
  & { tasks: (
    { __typename?: 'TaskConnection' }
    & { nodes: Array<(
      { __typename?: 'Task' }
      & Pick<Types.Task, 'id' | 'title' | 'description'>
    )> }
  ) }
);


export const GetTasksDocument = gql`
    query getTasks($filter: TaskFilter, $sorting: [TaskSort!], $paging: OffsetPaging) {
  tasks(filter: $filter, sorting: $sorting, paging: $paging) {
    nodes {
      id
      title
      description
    }
  }
}
    `;

/**
 * __useGetTasksQuery__
 *
 * To run a query within a React component, call `useGetTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useGetTasksQuery(baseOptions?: Apollo.QueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
      }
export function useGetTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTasksQuery, GetTasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTasksQuery, GetTasksQueryVariables>(GetTasksDocument, options);
        }
export type GetTasksQueryHookResult = ReturnType<typeof useGetTasksQuery>;
export type GetTasksLazyQueryHookResult = ReturnType<typeof useGetTasksLazyQuery>;
export type GetTasksQueryResult = Apollo.QueryResult<GetTasksQuery, GetTasksQueryVariables>;