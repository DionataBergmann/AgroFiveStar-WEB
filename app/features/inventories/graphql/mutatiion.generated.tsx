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
    & Pick<Types.Inventory, 'id' | 'name' | 'provider' | 'amount' | 'value'>
    & { storages?: Types.Maybe<(
      { __typename?: 'Storage' }
      & Pick<Types.Storage, 'id' | 'name'>
    )> }
  ) }
);

export type UpdateOneInventoryMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  inventory: Types.UpdateInventoryInput;
}>;


export type UpdateOneInventoryMutation = (
  { __typename?: 'Mutation' }
  & { updateOneInventory: (
    { __typename?: 'Inventory' }
    & Pick<Types.Inventory, 'id'>
  ) }
);

export type DeleteOneInventoryMutationVariables = Types.Exact<{
  input: Types.DeleteOneInventoryInput;
}>;


export type DeleteOneInventoryMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneInventory: (
    { __typename?: 'InventoryDeleteResponse' }
    & Pick<Types.InventoryDeleteResponse, 'id'>
  ) }
);


export const CreateOneInventoryDocument = gql`
    mutation createOneInventory($inventory: CreateInventoryInput!) {
  createOneInventory(input: {inventory: $inventory}) {
    id
    name
    storages {
      id
      name
    }
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
export const UpdateOneInventoryDocument = gql`
    mutation updateOneInventory($id: ID!, $inventory: UpdateInventoryInput!) {
  updateOneInventory(input: {id: $id, update: $inventory}) {
    id
  }
}
    `;
export type UpdateOneInventoryMutationFn = Apollo.MutationFunction<UpdateOneInventoryMutation, UpdateOneInventoryMutationVariables>;

/**
 * __useUpdateOneInventoryMutation__
 *
 * To run a mutation, you first call `useUpdateOneInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneInventoryMutation, { data, loading, error }] = useUpdateOneInventoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      inventory: // value for 'inventory'
 *   },
 * });
 */
export function useUpdateOneInventoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneInventoryMutation, UpdateOneInventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneInventoryMutation, UpdateOneInventoryMutationVariables>(UpdateOneInventoryDocument, options);
      }
export type UpdateOneInventoryMutationHookResult = ReturnType<typeof useUpdateOneInventoryMutation>;
export type UpdateOneInventoryMutationResult = Apollo.MutationResult<UpdateOneInventoryMutation>;
export type UpdateOneInventoryMutationOptions = Apollo.BaseMutationOptions<UpdateOneInventoryMutation, UpdateOneInventoryMutationVariables>;
export const DeleteOneInventoryDocument = gql`
    mutation deleteOneInventory($input: DeleteOneInventoryInput!) {
  deleteOneInventory(input: $input) {
    id
  }
}
    `;
export type DeleteOneInventoryMutationFn = Apollo.MutationFunction<DeleteOneInventoryMutation, DeleteOneInventoryMutationVariables>;

/**
 * __useDeleteOneInventoryMutation__
 *
 * To run a mutation, you first call `useDeleteOneInventoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneInventoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneInventoryMutation, { data, loading, error }] = useDeleteOneInventoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneInventoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneInventoryMutation, DeleteOneInventoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneInventoryMutation, DeleteOneInventoryMutationVariables>(DeleteOneInventoryDocument, options);
      }
export type DeleteOneInventoryMutationHookResult = ReturnType<typeof useDeleteOneInventoryMutation>;
export type DeleteOneInventoryMutationResult = Apollo.MutationResult<DeleteOneInventoryMutation>;
export type DeleteOneInventoryMutationOptions = Apollo.BaseMutationOptions<DeleteOneInventoryMutation, DeleteOneInventoryMutationVariables>;