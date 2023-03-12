import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateOneProductionMutationVariables = Types.Exact<{
  production: Types.CreateProductionInput;
}>;


export type CreateOneProductionMutation = (
  { __typename?: 'Mutation' }
  & { createOneProduction: (
    { __typename?: 'Production' }
    & Pick<Types.Production, 'id' | 'name' | 'amount'>
    & { fields?: Types.Maybe<(
      { __typename?: 'Field' }
      & Pick<Types.Field, 'id' | 'name'>
    )> }
  ) }
);

export type UpdateOneProductionMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  production: Types.UpdateProductionInput;
}>;


export type UpdateOneProductionMutation = (
  { __typename?: 'Mutation' }
  & { updateOneProduction: (
    { __typename?: 'Production' }
    & Pick<Types.Production, 'id'>
  ) }
);

export type DeleteOneProductionMutationVariables = Types.Exact<{
  input: Types.DeleteOneProductionInput;
}>;


export type DeleteOneProductionMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneProduction: (
    { __typename?: 'ProductionDeleteResponse' }
    & Pick<Types.ProductionDeleteResponse, 'id'>
  ) }
);


export const CreateOneProductionDocument = gql`
    mutation createOneProduction($production: CreateProductionInput!) {
  createOneProduction(input: {production: $production}) {
    id
    name
    amount
    fields {
      id
      name
    }
  }
}
    `;
export type CreateOneProductionMutationFn = Apollo.MutationFunction<CreateOneProductionMutation, CreateOneProductionMutationVariables>;

/**
 * __useCreateOneProductionMutation__
 *
 * To run a mutation, you first call `useCreateOneProductionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneProductionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneProductionMutation, { data, loading, error }] = useCreateOneProductionMutation({
 *   variables: {
 *      production: // value for 'production'
 *   },
 * });
 */
export function useCreateOneProductionMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneProductionMutation, CreateOneProductionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneProductionMutation, CreateOneProductionMutationVariables>(CreateOneProductionDocument, options);
      }
export type CreateOneProductionMutationHookResult = ReturnType<typeof useCreateOneProductionMutation>;
export type CreateOneProductionMutationResult = Apollo.MutationResult<CreateOneProductionMutation>;
export type CreateOneProductionMutationOptions = Apollo.BaseMutationOptions<CreateOneProductionMutation, CreateOneProductionMutationVariables>;
export const UpdateOneProductionDocument = gql`
    mutation updateOneProduction($id: ID!, $production: UpdateProductionInput!) {
  updateOneProduction(input: {id: $id, update: $production}) {
    id
  }
}
    `;
export type UpdateOneProductionMutationFn = Apollo.MutationFunction<UpdateOneProductionMutation, UpdateOneProductionMutationVariables>;

/**
 * __useUpdateOneProductionMutation__
 *
 * To run a mutation, you first call `useUpdateOneProductionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneProductionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneProductionMutation, { data, loading, error }] = useUpdateOneProductionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      production: // value for 'production'
 *   },
 * });
 */
export function useUpdateOneProductionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneProductionMutation, UpdateOneProductionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneProductionMutation, UpdateOneProductionMutationVariables>(UpdateOneProductionDocument, options);
      }
export type UpdateOneProductionMutationHookResult = ReturnType<typeof useUpdateOneProductionMutation>;
export type UpdateOneProductionMutationResult = Apollo.MutationResult<UpdateOneProductionMutation>;
export type UpdateOneProductionMutationOptions = Apollo.BaseMutationOptions<UpdateOneProductionMutation, UpdateOneProductionMutationVariables>;
export const DeleteOneProductionDocument = gql`
    mutation deleteOneProduction($input: DeleteOneProductionInput!) {
  deleteOneProduction(input: $input) {
    id
  }
}
    `;
export type DeleteOneProductionMutationFn = Apollo.MutationFunction<DeleteOneProductionMutation, DeleteOneProductionMutationVariables>;

/**
 * __useDeleteOneProductionMutation__
 *
 * To run a mutation, you first call `useDeleteOneProductionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneProductionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneProductionMutation, { data, loading, error }] = useDeleteOneProductionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneProductionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneProductionMutation, DeleteOneProductionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneProductionMutation, DeleteOneProductionMutationVariables>(DeleteOneProductionDocument, options);
      }
export type DeleteOneProductionMutationHookResult = ReturnType<typeof useDeleteOneProductionMutation>;
export type DeleteOneProductionMutationResult = Apollo.MutationResult<DeleteOneProductionMutation>;
export type DeleteOneProductionMutationOptions = Apollo.BaseMutationOptions<DeleteOneProductionMutation, DeleteOneProductionMutationVariables>;