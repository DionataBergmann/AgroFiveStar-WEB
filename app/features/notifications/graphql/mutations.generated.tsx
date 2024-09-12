import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateOneNotificationMutationVariables = Types.Exact<{
  input: Types.CreateNotificationInput;
}>;


export type CreateOneNotificationMutation = (
  { __typename?: 'Mutation' }
  & { createOneNotification: (
    { __typename?: 'Notification' }
    & Pick<Types.Notification, 'id'>
  ) }
);

export type UpdateOneNotificationMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  notification: Types.UpdateNotificationInput;
}>;


export type UpdateOneNotificationMutation = (
  { __typename?: 'Mutation' }
  & { updateOneNotification: (
    { __typename?: 'Notification' }
    & Pick<Types.Notification, 'id'>
  ) }
);

export type DeleteOneNotificationMutationVariables = Types.Exact<{
  input: Types.DeleteOneNotificationInput;
}>;


export type DeleteOneNotificationMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneNotification: (
    { __typename?: 'NotificationDeleteResponse' }
    & Pick<Types.NotificationDeleteResponse, 'id'>
  ) }
);


export const CreateOneNotificationDocument = gql`
    mutation createOneNotification($input: CreateNotificationInput!) {
  createOneNotification(input: {notification: $input}) {
    id
  }
}
    `;
export type CreateOneNotificationMutationFn = Apollo.MutationFunction<CreateOneNotificationMutation, CreateOneNotificationMutationVariables>;

/**
 * __useCreateOneNotificationMutation__
 *
 * To run a mutation, you first call `useCreateOneNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneNotificationMutation, { data, loading, error }] = useCreateOneNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneNotificationMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneNotificationMutation, CreateOneNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneNotificationMutation, CreateOneNotificationMutationVariables>(CreateOneNotificationDocument, options);
      }
export type CreateOneNotificationMutationHookResult = ReturnType<typeof useCreateOneNotificationMutation>;
export type CreateOneNotificationMutationResult = Apollo.MutationResult<CreateOneNotificationMutation>;
export type CreateOneNotificationMutationOptions = Apollo.BaseMutationOptions<CreateOneNotificationMutation, CreateOneNotificationMutationVariables>;
export const UpdateOneNotificationDocument = gql`
    mutation updateOneNotification($id: ID!, $notification: UpdateNotificationInput!) {
  updateOneNotification(input: {id: $id, update: $notification}) {
    id
  }
}
    `;
export type UpdateOneNotificationMutationFn = Apollo.MutationFunction<UpdateOneNotificationMutation, UpdateOneNotificationMutationVariables>;

/**
 * __useUpdateOneNotificationMutation__
 *
 * To run a mutation, you first call `useUpdateOneNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneNotificationMutation, { data, loading, error }] = useUpdateOneNotificationMutation({
 *   variables: {
 *      id: // value for 'id'
 *      notification: // value for 'notification'
 *   },
 * });
 */
export function useUpdateOneNotificationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneNotificationMutation, UpdateOneNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneNotificationMutation, UpdateOneNotificationMutationVariables>(UpdateOneNotificationDocument, options);
      }
export type UpdateOneNotificationMutationHookResult = ReturnType<typeof useUpdateOneNotificationMutation>;
export type UpdateOneNotificationMutationResult = Apollo.MutationResult<UpdateOneNotificationMutation>;
export type UpdateOneNotificationMutationOptions = Apollo.BaseMutationOptions<UpdateOneNotificationMutation, UpdateOneNotificationMutationVariables>;
export const DeleteOneNotificationDocument = gql`
    mutation deleteOneNotification($input: DeleteOneNotificationInput!) {
  deleteOneNotification(input: $input) {
    id
  }
}
    `;
export type DeleteOneNotificationMutationFn = Apollo.MutationFunction<DeleteOneNotificationMutation, DeleteOneNotificationMutationVariables>;

/**
 * __useDeleteOneNotificationMutation__
 *
 * To run a mutation, you first call `useDeleteOneNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneNotificationMutation, { data, loading, error }] = useDeleteOneNotificationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneNotificationMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneNotificationMutation, DeleteOneNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneNotificationMutation, DeleteOneNotificationMutationVariables>(DeleteOneNotificationDocument, options);
      }
export type DeleteOneNotificationMutationHookResult = ReturnType<typeof useDeleteOneNotificationMutation>;
export type DeleteOneNotificationMutationResult = Apollo.MutationResult<DeleteOneNotificationMutation>;
export type DeleteOneNotificationMutationOptions = Apollo.BaseMutationOptions<DeleteOneNotificationMutation, DeleteOneNotificationMutationVariables>;