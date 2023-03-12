import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateOneFieldMutationVariables = Types.Exact<{
  data: Types.CreateFieldInput;
  fieldImage?: Types.Maybe<Types.Scalars['Upload']>;
}>;


export type CreateOneFieldMutation = (
  { __typename?: 'Mutation' }
  & { createOneField: (
    { __typename?: 'Field' }
    & Pick<Types.Field, 'id'>
  ) }
);

export type UpdateOneFieldMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  data: Types.UpdateFieldInput;
  fieldImage?: Types.Maybe<Types.Scalars['Upload']>;
}>;


export type UpdateOneFieldMutation = (
  { __typename?: 'Mutation' }
  & { updateOneField: (
    { __typename?: 'Field' }
    & Pick<Types.Field, 'id'>
  ) }
);

export type DeleteOneFieldMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type DeleteOneFieldMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneFieldAndForget: (
    { __typename?: 'Field' }
    & Pick<Types.Field, 'id' | 'name'>
  ) }
);


export const CreateOneFieldDocument = gql`
    mutation createOneField($data: CreateFieldInput!, $fieldImage: Upload) {
  createOneField(data: $data, fieldImage: $fieldImage) {
    id
  }
}
    `;
export type CreateOneFieldMutationFn = Apollo.MutationFunction<CreateOneFieldMutation, CreateOneFieldMutationVariables>;

/**
 * __useCreateOneFieldMutation__
 *
 * To run a mutation, you first call `useCreateOneFieldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneFieldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneFieldMutation, { data, loading, error }] = useCreateOneFieldMutation({
 *   variables: {
 *      data: // value for 'data'
 *      fieldImage: // value for 'fieldImage'
 *   },
 * });
 */
export function useCreateOneFieldMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneFieldMutation, CreateOneFieldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneFieldMutation, CreateOneFieldMutationVariables>(CreateOneFieldDocument, options);
      }
export type CreateOneFieldMutationHookResult = ReturnType<typeof useCreateOneFieldMutation>;
export type CreateOneFieldMutationResult = Apollo.MutationResult<CreateOneFieldMutation>;
export type CreateOneFieldMutationOptions = Apollo.BaseMutationOptions<CreateOneFieldMutation, CreateOneFieldMutationVariables>;
export const UpdateOneFieldDocument = gql`
    mutation updateOneField($id: String!, $data: UpdateFieldInput!, $fieldImage: Upload) {
  updateOneField(id: $id, data: $data, fieldImage: $fieldImage) {
    id
  }
}
    `;
export type UpdateOneFieldMutationFn = Apollo.MutationFunction<UpdateOneFieldMutation, UpdateOneFieldMutationVariables>;

/**
 * __useUpdateOneFieldMutation__
 *
 * To run a mutation, you first call `useUpdateOneFieldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneFieldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneFieldMutation, { data, loading, error }] = useUpdateOneFieldMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *      fieldImage: // value for 'fieldImage'
 *   },
 * });
 */
export function useUpdateOneFieldMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneFieldMutation, UpdateOneFieldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneFieldMutation, UpdateOneFieldMutationVariables>(UpdateOneFieldDocument, options);
      }
export type UpdateOneFieldMutationHookResult = ReturnType<typeof useUpdateOneFieldMutation>;
export type UpdateOneFieldMutationResult = Apollo.MutationResult<UpdateOneFieldMutation>;
export type UpdateOneFieldMutationOptions = Apollo.BaseMutationOptions<UpdateOneFieldMutation, UpdateOneFieldMutationVariables>;
export const DeleteOneFieldDocument = gql`
    mutation deleteOneField($id: String!) {
  deleteOneFieldAndForget(id: $id) {
    id
    name
  }
}
    `;
export type DeleteOneFieldMutationFn = Apollo.MutationFunction<DeleteOneFieldMutation, DeleteOneFieldMutationVariables>;

/**
 * __useDeleteOneFieldMutation__
 *
 * To run a mutation, you first call `useDeleteOneFieldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneFieldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneFieldMutation, { data, loading, error }] = useDeleteOneFieldMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOneFieldMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneFieldMutation, DeleteOneFieldMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneFieldMutation, DeleteOneFieldMutationVariables>(DeleteOneFieldDocument, options);
      }
export type DeleteOneFieldMutationHookResult = ReturnType<typeof useDeleteOneFieldMutation>;
export type DeleteOneFieldMutationResult = Apollo.MutationResult<DeleteOneFieldMutation>;
export type DeleteOneFieldMutationOptions = Apollo.BaseMutationOptions<DeleteOneFieldMutation, DeleteOneFieldMutationVariables>;