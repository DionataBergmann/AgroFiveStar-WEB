import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetInventoriesQueryVariables = Types.Exact<{
  filter?: Types.Maybe<Types.InventoryFilter>;
  sorting?: Types.Maybe<Array<Types.InventorySort> | Types.InventorySort>;
  paging?: Types.Maybe<Types.OffsetPaging>;
}>;


export type GetInventoriesQuery = (
  { __typename?: 'Query' }
  & { inventories: (
    { __typename?: 'InventoryConnection' }
    & { nodes: Array<(
      { __typename?: 'Inventory' }
      & Pick<Types.Inventory, 'id' | 'name' | 'provider' | 'amount' | 'value' | 'createdAt'>
      & { fields?: Types.Maybe<(
        { __typename?: 'Field' }
        & Pick<Types.Field, 'id' | 'name'>
      )>, storages?: Types.Maybe<(
        { __typename?: 'Storage' }
        & Pick<Types.Storage, 'id' | 'name'>
      )> }
    )> }
  ) }
);


export const GetInventoriesDocument = gql`
    query getInventories($filter: InventoryFilter, $sorting: [InventorySort!], $paging: OffsetPaging) {
  inventories(filter: $filter, sorting: $sorting, paging: $paging) {
    nodes {
      id
      name
      provider
      amount
      value
      createdAt
      fields {
        id
        name
      }
      storages {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetInventoriesQuery__
 *
 * To run a query within a React component, call `useGetInventoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInventoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInventoriesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useGetInventoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetInventoriesQuery, GetInventoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetInventoriesQuery, GetInventoriesQueryVariables>(GetInventoriesDocument, options);
      }
export function useGetInventoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetInventoriesQuery, GetInventoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetInventoriesQuery, GetInventoriesQueryVariables>(GetInventoriesDocument, options);
        }
export type GetInventoriesQueryHookResult = ReturnType<typeof useGetInventoriesQuery>;
export type GetInventoriesLazyQueryHookResult = ReturnType<typeof useGetInventoriesLazyQuery>;
export type GetInventoriesQueryResult = Apollo.QueryResult<GetInventoriesQuery, GetInventoriesQueryVariables>;