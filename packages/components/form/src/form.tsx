import React, { useEffect } from 'react';
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';
import { assignRef, ReactRef } from '@stn-ui/react-utils';

type FormValidateMode = 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all';

export interface FormProps {
  children: React.ReactNode;
  validationSchema?: AnyObjectSchema | ObjectLiteral;
  initialValues?: ObjectLiteral;
  validateMode?: FormValidateMode;
  className?: string;
  reValidateMode?: Exclude<FormValidateMode, 'onTouched' | 'all'>;
  innerRef?: ReactRef<Maybe<UseFormReturn<ObjectLiteral>>>;
  dataHook?: string;
  onSubmit?: (values: ObjectLiteral) => void;
}

export const Form: React.FC<FormProps> = ({
  onSubmit = (): void => {},
  validationSchema,
  validateMode = 'onChange',
  reValidateMode = 'onChange',
  initialValues,
  children,
  className,
  dataHook,
  innerRef,
}) => {
  const form = useForm({
    mode: validateMode,
    reValidateMode,
    defaultValues: initialValues,
    ...(validationSchema ? { resolver: yupResolver(validationSchema as AnyObjectSchema) } : {}),
  });

  useEffect(() => {
    if (!innerRef) return;
    assignRef(innerRef, form);
  }, [form]);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit((values) => onSubmit(values))} className={className} data-testid={dataHook}>
        {children}
      </form>
    </FormProvider>
  );
};
