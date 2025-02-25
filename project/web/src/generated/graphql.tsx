/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AddTodoInput = {
  /** Todo 텍스트 인풋 데이터 */
  text: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  AddTodo: Todo;
  UpdateTodo: Scalars['Boolean']['output'];
  deleteTodo: Scalars['Boolean']['output'];
  updatePriority: Scalars['Boolean']['output'];
};


export type MutationAddTodoArgs = {
  todoTextInput: AddTodoInput;
};


export type MutationUpdateTodoArgs = {
  UpdateTodoInput: UpdateTodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['Float']['input'];
};


export type MutationUpdatePriorityArgs = {
  id: Scalars['Float']['input'];
  priority: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  Todo: Todo;
  Todos: Array<Todo>;
};


export type QueryTodoArgs = {
  id: Scalars['Float']['input'];
};

export type Todo = {
  __typename?: 'Todo';
  /** 생성 일자 */
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** 완료 */
  isCompleted: Scalars['Boolean']['output'];
  /** 우선 순위 */
  priority: Scalars['Int']['output'];
  /** Todo 텍스트 */
  text: Scalars['String']['output'];
  /** 수정 일자 */
  updatedAt: Scalars['String']['output'];
};

export type UpdateTodoInput = {
  id: Scalars['Float']['input'];
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type AddTodoMutationVariables = Exact<{
  todoTextInput: AddTodoInput;
}>;


export type AddTodoMutation = { __typename?: 'Mutation', AddTodo: { __typename?: 'Todo', id: number, text: string, isCompleted: boolean, priority: number, createdAt: string } };

export type DeleteTodoMutationVariables = Exact<{
  deleteTodoId: Scalars['Float']['input'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: boolean };

export type UpdatePriorityMutationVariables = Exact<{
  priority: Scalars['Float']['input'];
  updatePriorityId: Scalars['Float']['input'];
}>;


export type UpdatePriorityMutation = { __typename?: 'Mutation', updatePriority: boolean };

export type UpdateTodoMutationVariables = Exact<{
  updateTodoInput: UpdateTodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', UpdateTodo: boolean };

export type TodoQueryVariables = Exact<{
  todoId: Scalars['Float']['input'];
}>;


export type TodoQuery = { __typename?: 'Query', Todo: { __typename?: 'Todo', id: number, text: string, isCompleted: boolean, priority: number, createdAt: string, updatedAt: string } };

export type TodosQueryVariables = Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', Todos: Array<{ __typename?: 'Todo', id: number, text: string, isCompleted: boolean, priority: number, createdAt: string, updatedAt: string }> };


export const AddTodoDocument = gql`
    mutation AddTodo($todoTextInput: AddTodoInput!) {
  AddTodo(todoTextInput: $todoTextInput) {
    id
    text
    isCompleted
    priority
    createdAt
  }
}
    `;
export type AddTodoMutationFn = Apollo.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      todoTextInput: // value for 'todoTextInput'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: Apollo.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, options);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = Apollo.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = Apollo.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation DeleteTodo($deleteTodoId: Float!) {
  deleteTodo(id: $deleteTodoId)
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      deleteTodoId: // value for 'deleteTodoId'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const UpdatePriorityDocument = gql`
    mutation UpdatePriority($priority: Float!, $updatePriorityId: Float!) {
  updatePriority(priority: $priority, id: $updatePriorityId)
}
    `;
export type UpdatePriorityMutationFn = Apollo.MutationFunction<UpdatePriorityMutation, UpdatePriorityMutationVariables>;

/**
 * __useUpdatePriorityMutation__
 *
 * To run a mutation, you first call `useUpdatePriorityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePriorityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePriorityMutation, { data, loading, error }] = useUpdatePriorityMutation({
 *   variables: {
 *      priority: // value for 'priority'
 *      updatePriorityId: // value for 'updatePriorityId'
 *   },
 * });
 */
export function useUpdatePriorityMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePriorityMutation, UpdatePriorityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePriorityMutation, UpdatePriorityMutationVariables>(UpdatePriorityDocument, options);
      }
export type UpdatePriorityMutationHookResult = ReturnType<typeof useUpdatePriorityMutation>;
export type UpdatePriorityMutationResult = Apollo.MutationResult<UpdatePriorityMutation>;
export type UpdatePriorityMutationOptions = Apollo.BaseMutationOptions<UpdatePriorityMutation, UpdatePriorityMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation UpdateTodo($updateTodoInput: UpdateTodoInput!) {
  UpdateTodo(UpdateTodoInput: $updateTodoInput)
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      updateTodoInput: // value for 'updateTodoInput'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const TodoDocument = gql`
    query Todo($todoId: Float!) {
  Todo(id: $todoId) {
    id
    text
    isCompleted
    priority
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useTodoQuery__
 *
 * To run a query within a React component, call `useTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoQuery({
 *   variables: {
 *      todoId: // value for 'todoId'
 *   },
 * });
 */
export function useTodoQuery(baseOptions: Apollo.QueryHookOptions<TodoQuery, TodoQueryVariables> & ({ variables: TodoQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
      }
export function useTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodoQuery, TodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
        }
export function useTodoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TodoQuery, TodoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
        }
export type TodoQueryHookResult = ReturnType<typeof useTodoQuery>;
export type TodoLazyQueryHookResult = ReturnType<typeof useTodoLazyQuery>;
export type TodoSuspenseQueryHookResult = ReturnType<typeof useTodoSuspenseQuery>;
export type TodoQueryResult = Apollo.QueryResult<TodoQuery, TodoQueryVariables>;
export const TodosDocument = gql`
    query Todos {
  Todos {
    id
    text
    isCompleted
    priority
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
        }
export function useTodosSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosSuspenseQueryHookResult = ReturnType<typeof useTodosSuspenseQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;