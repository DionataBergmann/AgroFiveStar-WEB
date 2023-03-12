import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetProductionsQueryVariables = Types.Exact<{
  filter?: Types.Maybe<Types.ProductionFilter>;
  sorting?: Types.Maybe<Array<Types.ProductionSort> | Types.ProductionSort>;
  paging?: Types.Maybe<Types.OffsetPaging>;
}>;


export type GetProductionsQuery = (
  { __typename?: 'Query' }
  & { productions: (
    { __typename?: 'ProductionConnection' }
    & { nodes: Array<(
      { __typename?: 'Production' }
      & Pick<Types.Production, 'id' | 'name' | 'amount' | 'createdAt'>
      & { fields?: Types.Maybe<(
        { __typename?: 'Field' }
        & Pick<Types.Field, 'id' | 'name'>
      )> }
    )> }
  ) }
);


export const GetProductionsDocument = gql`
    query getProductions($filter: ProductionFilter, $sorting: [ProductionSort!], $paging: OffsetPaging) {
  productions(filter: $filter, sorting: $sorting, paging: $paging) {
    nodes {
      id
      name
      amount
      createdAt
      fields {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetProductionsQuery__
 *
 * To run a query within a React component, call `useGetProductionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductionsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useGetProductionsQuery(baseOptions?: Apollo.QueryHookOptions<GetProductionsQuery, GetProductionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductionsQuery, GetProductionsQueryVariables>(GetProductionsDocument, options);
      }
export function useGetProductionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductionsQuery, GetProductionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductionsQuery, GetProductionsQueryVariables>(GetProductionsDocument, options);
        }
export type GetProductionsQueryHookResult = ReturnType<typeof useGetProductionsQuery>;
export type GetProductionsLazyQueryHookResult = ReturnType<typeof useGetProductionsLazyQuery>;
export type GetProductionsQueryResult = Apollo.QueryResult<GetProductionsQuery, GetProductionsQueryVariables>;