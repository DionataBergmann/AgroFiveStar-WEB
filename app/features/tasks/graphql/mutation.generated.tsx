import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateOneTaskMutationVariables = Types.Exact<{
  task: Types.CreateTaskInput;
}>;


export type CreateOneTaskMutation = (
  { __typename?: 'Mutation' }
  & { createOneTask: (
    { __typename?: 'Task' }
    & Pick<Types.Task, 'id'>
  ) }
);

export type UpdateOneTaskMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  task: Types.UpdateTaskInput;
}>;


export type UpdateOneTaskMutation = (
  { __typename?: 'Mutation' }
  & { updateOneTask: (
    { __typename?: 'Task' }
    & Pick<Types.Task, 'id'>
  ) }
);

export type DeleteOneTaskMutationVariables = Types.Exact<{
  input: Types.DeleteOneTaskInput;
}>;


export type DeleteOneTaskMutation = (
  { __typename?: 'Mutation' }
  & { deleteOneTask: (
    { __typename?: 'TaskDeleteResponse' }
    & Pick<Types.TaskDeleteResponse, 'id'>
  ) }
);


export const CreateOneTaskDocument = gql`
    mutation createOneTask($task: CreateTaskInput!) {
  createOneTask(input: {task: $task}) {
    id
  }
}
    `;
export type CreateOneTaskMutationFn = Apollo.MutationFunction<CreateOneTaskMutation, CreateOneTaskMutationVariables>;

/**
 * __useCreateOneTaskMutation__
 *
 * To run a mutation, you first call `useCreateOneTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneTaskMutation, { data, loading, error }] = useCreateOneTaskMutation({
 *   variables: {
 *      task: // value for 'task'
 *   },
 * });
 */
export function useCreateOneTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateOneTaskMutation, CreateOneTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOneTaskMutation, CreateOneTaskMutationVariables>(CreateOneTaskDocument, options);
      }
export type CreateOneTaskMutationHookResult = ReturnType<typeof useCreateOneTaskMutation>;
export type CreateOneTaskMutationResult = Apollo.MutationResult<CreateOneTaskMutation>;
export type CreateOneTaskMutationOptions = Apollo.BaseMutationOptions<CreateOneTaskMutation, CreateOneTaskMutationVariables>;
export const UpdateOneTaskDocument = gql`
    mutation updateOneTask($id: ID!, $task: UpdateTaskInput!) {
  updateOneTask(input: {id: $id, update: $task}) {
    id
  }
}
    `;
export type UpdateOneTaskMutationFn = Apollo.MutationFunction<UpdateOneTaskMutation, UpdateOneTaskMutationVariables>;

/**
 * __useUpdateOneTaskMutation__
 *
 * To run a mutation, you first call `useUpdateOneTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneTaskMutation, { data, loading, error }] = useUpdateOneTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      task: // value for 'task'
 *   },
 * });
 */
export function useUpdateOneTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOneTaskMutation, UpdateOneTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOneTaskMutation, UpdateOneTaskMutationVariables>(UpdateOneTaskDocument, options);
      }
export type UpdateOneTaskMutationHookResult = ReturnType<typeof useUpdateOneTaskMutation>;
export type UpdateOneTaskMutationResult = Apollo.MutationResult<UpdateOneTaskMutation>;
export type UpdateOneTaskMutationOptions = Apollo.BaseMutationOptions<UpdateOneTaskMutation, UpdateOneTaskMutationVariables>;
export const DeleteOneTaskDocument = gql`
    mutation deleteOneTask($input: DeleteOneTaskInput!) {
  deleteOneTask(input: $input) {
    id
  }
}
    `;
export type DeleteOneTaskMutationFn = Apollo.MutationFunction<DeleteOneTaskMutation, DeleteOneTaskMutationVariables>;

/**
 * __useDeleteOneTaskMutation__
 *
 * To run a mutation, you first call `useDeleteOneTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneTaskMutation, { data, loading, error }] = useDeleteOneTaskMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOneTaskMutation, DeleteOneTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOneTaskMutation, DeleteOneTaskMutationVariables>(DeleteOneTaskDocument, options);
      }
export type DeleteOneTaskMutationHookResult = ReturnType<typeof useDeleteOneTaskMutation>;
export type DeleteOneTaskMutationResult = Apollo.MutationResult<DeleteOneTaskMutation>;
export type DeleteOneTaskMutationOptions = Apollo.BaseMutationOptions<DeleteOneTaskMutation, DeleteOneTaskMutationVariables>;