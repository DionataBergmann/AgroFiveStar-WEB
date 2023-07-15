import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetStoragesQueryVariables = Types.Exact<{
  filter?: Types.Maybe<Types.StorageFilter>;
  sorting?: Types.Maybe<Array<Types.StorageSort> | Types.StorageSort>;
  paging?: Types.Maybe<Types.OffsetPaging>;
}>;


export type GetStoragesQuery = (
  { __typename?: 'Query' }
  & { storages: (
    { __typename?: 'StorageConnection' }
    & { nodes: Array<(
      { __typename?: 'Storage' }
      & Pick<Types.Storage, 'id' | 'name' | 'amount'>
      & { inventories?: Types.Maybe<(
        { __typename?: 'Inventory' }
        & Pick<Types.Inventory, 'name' | 'amount'>
      )> }
    )> }
  ) }
);


export const GetStoragesDocument = gql`
    query getStorages($filter: StorageFilter, $sorting: [StorageSort!], $paging: OffsetPaging) {
  storages(filter: $filter, sorting: $sorting, paging: $paging) {
    nodes {
      id
      name
      amount
      inventories {
        name
        amount
      }
    }
  }
}
    `;

/**
 * __useGetStoragesQuery__
 *
 * To run a query within a React component, call `useGetStoragesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStoragesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStoragesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useGetStoragesQuery(baseOptions?: Apollo.QueryHookOptions<GetStoragesQuery, GetStoragesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStoragesQuery, GetStoragesQueryVariables>(GetStoragesDocument, options);
      }
export function useGetStoragesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStoragesQuery, GetStoragesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStoragesQuery, GetStoragesQueryVariables>(GetStoragesDocument, options);
        }
export type GetStoragesQueryHookResult = ReturnType<typeof useGetStoragesQuery>;
export type GetStoragesLazyQueryHookResult = ReturnType<typeof useGetStoragesLazyQuery>;
export type GetStoragesQueryResult = Apollo.QueryResult<GetStoragesQuery, GetStoragesQueryVariables>;