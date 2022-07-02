import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetFieldsQueryVariables = Types.Exact<{
  filter?: Types.Maybe<Types.FieldFilter>;
  sorting?: Types.Maybe<Array<Types.FieldSort> | Types.FieldSort>;
  paging?: Types.Maybe<Types.OffsetPaging>;
}>;


export type GetFieldsQuery = (
  { __typename?: 'Query' }
  & { fields: (
    { __typename?: 'FieldConnection' }
    & { nodes: Array<(
      { __typename?: 'Field' }
      & Pick<Types.Field, 'id' | 'name' | 'acre' | 'imageUrl'>
    )> }
  ) }
);


export const GetFieldsDocument = gql`
    query getFields($filter: FieldFilter, $sorting: [FieldSort!], $paging: OffsetPaging) {
  fields(filter: $filter, sorting: $sorting, paging: $paging) {
    nodes {
      id
      name
      acre
      imageUrl
    }
  }
}
    `;

/**
 * __useGetFieldsQuery__
 *
 * To run a query within a React component, call `useGetFieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFieldsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useGetFieldsQuery(baseOptions?: Apollo.QueryHookOptions<GetFieldsQuery, GetFieldsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFieldsQuery, GetFieldsQueryVariables>(GetFieldsDocument, options);
      }
export function useGetFieldsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFieldsQuery, GetFieldsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFieldsQuery, GetFieldsQueryVariables>(GetFieldsDocument, options);
        }
export type GetFieldsQueryHookResult = ReturnType<typeof useGetFieldsQuery>;
export type GetFieldsLazyQueryHookResult = ReturnType<typeof useGetFieldsLazyQuery>;
export type GetFieldsQueryResult = Apollo.QueryResult<GetFieldsQuery, GetFieldsQueryVariables>;