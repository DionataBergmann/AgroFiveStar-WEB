import * as Types from '../../../generated/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateOneFieldMutationVariables = Types.Exact<{
  field: Types.CreateFieldInput;
}>;


export type CreateOneFieldMutation = (
  { __typename?: 'Mutation' }
  & { createOneField: (
    { __typename?: 'Field' }
    & Pick<Types.Field, 'id' | 'name' | 'acre' | 'imageUrl'>
  ) }
);


export const CreateOneFieldDocument = gql`
    mutation createOneField($field: CreateFieldInput!) {
  createOneField(input: {field: $field}) {
    id
    name
    acre
    imageUrl
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
 *      field: // value for 'field'
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