import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateOneInventoryMutationVariables = Types.Exact<{
  inventory: Types.CreateInventoryInput;
}>;


export type CreateOneInventoryMutation = (
  { __typename?: 'Mutation' }
  & { createOneInventory: (
    { __typename?: 'Inventory' }
    & Pick<Types.Inventory, 'id' | 'name' | 'storage' | 'provider' | 'amount' | 'value'>
  ) }
);


export const CreateOneInventoryDocument = gql`
    mutation createOneInventory($inventory: CreateInventoryInput!) {
  createOneInventory(input: {inventory: $inventory}) {
    id
    name
    storage
    provider
    amount
    value
  }
}
    `;
export type CreateOneInventoryMutationFn = Apollo.MutationFunction<CreateOneInventoryMutation, CreateOneInventoryMutationVariables>;

/**
 * __useCreateOneInventoryMutation__
 *
 * To run a mutation, you first call `useCreateOneInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneInventoryMutation, { data, loading, error }] = useCreateOneInventoryMutation({
 *   variables: {
 *      inventory: // value for 'inventory'
 *   },
 * });
 */
export function useCreateOneInventoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneInventoryMutation, CreateOneInventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneInventoryMutation, CreateOneInventoryMutationVariables>(CreateOneInventoryDocument, options);
      }
export type CreateOneInventoryMutationHookResult = ReturnType<typeof useCreateOneInventoryMutation>;
export type CreateOneInventoryMutationResult = Apollo.MutationResult<CreateOneInventoryMutation>;
export type CreateOneInventoryMutationOptions = Apollo.BaseMutationOptions<CreateOneInventoryMutation, CreateOneInventoryMutationVariables>;