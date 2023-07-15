import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateOneStorageMutationVariables = Types.Exact<{
  storage: Types.CreateStorageInput;
}>;


export type CreateOneStorageMutation = (
  { __typename?: 'Mutation' }
  & { createOneStorage: (
    { __typename?: 'Storage' }
    & Pick<Types.Storage, 'id' | 'name' | 'amount'>
  ) }
);

export type UpdateOneStorageMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  storage: Types.UpdateStorageInput;
}>;


export type UpdateOneStorageMutation = (
  { __typename?: 'Mutation' }
  & { updateOneStorage: (
    { __typename?: 'Storage' }
    & Pick<Types.Storage, 'id'>
  ) }
);

export type DeleteOneStorageMutationVariables = Types.Exact<{
  input: Types.DeleteOneStorageInput;
}>;


export type DeleteOneStorageMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneStorage: (
    { __typename?: 'StorageDeleteResponse' }
    & Pick<Types.StorageDeleteResponse, 'id'>
  ) }
);


export const CreateOneStorageDocument = gql`
    mutation createOneStorage($storage: CreateStorageInput!) {
  createOneStorage(input: {storage: $storage}) {
    id
    name
    amount
  }
}
    `;
export type CreateOneStorageMutationFn = Apollo.MutationFunction<CreateOneStorageMutation, CreateOneStorageMutationVariables>;

/**
 * __useCreateOneStorageMutation__
 *
 * To run a mutation, you first call `useCreateOneStorageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneStorageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneStorageMutation, { data, loading, error }] = useCreateOneStorageMutation({
 *   variables: {
 *      storage: // value for 'storage'
 *   },
 * });
 */
export function useCreateOneStorageMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneStorageMutation, CreateOneStorageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneStorageMutation, CreateOneStorageMutationVariables>(CreateOneStorageDocument, options);
      }
export type CreateOneStorageMutationHookResult = ReturnType<typeof useCreateOneStorageMutation>;
export type CreateOneStorageMutationResult = Apollo.MutationResult<CreateOneStorageMutation>;
export type CreateOneStorageMutationOptions = Apollo.BaseMutationOptions<CreateOneStorageMutation, CreateOneStorageMutationVariables>;
export const UpdateOneStorageDocument = gql`
    mutation updateOneStorage($id: ID!, $storage: UpdateStorageInput!) {
  updateOneStorage(input: {id: $id, update: $storage}) {
    id
  }
}
    `;
export type UpdateOneStorageMutationFn = Apollo.MutationFunction<UpdateOneStorageMutation, UpdateOneStorageMutationVariables>;

/**
 * __useUpdateOneStorageMutation__
 *
 * To run a mutation, you first call `useUpdateOneStorageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneStorageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneStorageMutation, { data, loading, error }] = useUpdateOneStorageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      storage: // value for 'storage'
 *   },
 * });
 */
export function useUpdateOneStorageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneStorageMutation, UpdateOneStorageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneStorageMutation, UpdateOneStorageMutationVariables>(UpdateOneStorageDocument, options);
      }
export type UpdateOneStorageMutationHookResult = ReturnType<typeof useUpdateOneStorageMutation>;
export type UpdateOneStorageMutationResult = Apollo.MutationResult<UpdateOneStorageMutation>;
export type UpdateOneStorageMutationOptions = Apollo.BaseMutationOptions<UpdateOneStorageMutation, UpdateOneStorageMutationVariables>;
export const DeleteOneStorageDocument = gql`
    mutation deleteOneStorage($input: DeleteOneStorageInput!) {
  deleteOneStorage(input: $input) {
    id
  }
}
    `;
export type DeleteOneStorageMutationFn = Apollo.MutationFunction<DeleteOneStorageMutation, DeleteOneStorageMutationVariables>;

/**
 * __useDeleteOneStorageMutation__
 *
 * To run a mutation, you first call `useDeleteOneStorageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneStorageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneStorageMutation, { data, loading, error }] = useDeleteOneStorageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneStorageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneStorageMutation, DeleteOneStorageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneStorageMutation, DeleteOneStorageMutationVariables>(DeleteOneStorageDocument, options);
      }
export type DeleteOneStorageMutationHookResult = ReturnType<typeof useDeleteOneStorageMutation>;
export type DeleteOneStorageMutationResult = Apollo.MutationResult<DeleteOneStorageMutation>;
export type DeleteOneStorageMutationOptions = Apollo.BaseMutationOptions<DeleteOneStorageMutation, DeleteOneStorageMutationVariables>;