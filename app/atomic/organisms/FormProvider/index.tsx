import React from 'react'

import { Form, FormProps, FormRenderProps } from 'react-final-form'
import {
  createContext,
  useContextSelector,
} from 'use-context-selector'

const FormContext =
  createContext<
    FormRenderProps<Record<string, any>, Partial<Record<string, any>>>
  >(null)

export default function FormProvider(props: FormProps) {
  return (
    <Form {...props}>
      {(formProps) => (
        <FormContext.Provider value={formProps}>
          {typeof props.children === 'function'
            ? props.children?.(formProps)
            : props.children}
        </FormContext.Provider>
      )}
    </Form>
  )
}

export function useFormContextSelector(
  fn: (
    value: FormRenderProps<
      Record<string, any>,
      Partial<Record<string, any>>
    >,
  ) => any,
) {
  return useContextSelector(FormContext, fn)
}
