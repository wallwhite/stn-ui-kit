import { PropsWithChildren, ReactElement, ReactNode, forwardRef } from 'react';
import { Listbox } from '@headlessui/react';
import isEqual from 'lodash.isequal';
import { ArrowDownIcon } from '@stn-ui/icons';
import { selectCX } from '@stn-ui/theme';
import { SelectItemValue } from '../../types';
import { InputHint } from '../input-hint';
import { Label } from '../label';

export interface SelectProps extends PropsWithChildren<{}> {
  scale?: 's' | 'm' | 'l';
  warning?: ReactNode | boolean;
  error?: ReactNode | boolean;
  success?: ReactNode | boolean;
  label?: ReactNode;
  placeholder?: string;
  elementLeft?: ReactNode;
  value?: SelectItemValue;
  isWide?: boolean;
  isDisabled?: boolean;
  className?: string;
  onBlur?: () => void;
  onChange?: (value: SelectItemValue) => void;
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>((props, ref) => {
  const {
    scale = 'm',
    warning,
    error,
    success,
    label,
    elementLeft,
    value,
    placeholder,
    isWide,
    isDisabled,
    onChange,
    onBlur,
    className,
    children,
  } = props;

  const hint = success || warning || error;

  const isHintVisible = hint && (typeof hint === 'string' || typeof hint === 'object');

  const isSuccess = Boolean(success && !error);
  const isWarning = Boolean(warning && !error);

  const classNames = selectCX.selectTrigger(
    {
      scale,
      error: !!error,
      isSuccess,
      isWarning,
      isDisabled,
    },
    className,
  );

  const wrapperClassNames = selectCX.wrapper({ scale });
  return (
    <Label
      className={wrapperClassNames}
      labelClassName={selectCX.label()}
      label={label}
      isWide={isWide}
      isForm={false}
      onBlur={onBlur}
    >
      <Listbox value={value} onChange={onChange} by={isEqual}>
        {({ open }: Record<'open', boolean>): ReactElement => (
          <>
            <Listbox.Button className={classNames} ref={ref}>
              {elementLeft && <span className={selectCX.addonElement()}>{elementLeft}</span>}
              {value?.title ? (
                <span className={selectCX.value()}>{value.title}</span>
              ) : (
                <span className={selectCX.placeholder()}>{placeholder ?? 'Select...'}</span>
              )}
              <ArrowDownIcon className={selectCX.arrowIcon({ open })} />
            </Listbox.Button>
            {isHintVisible && (
              <InputHint isError={!!error} isWarning={!!warning} isSuccess={!!success} isDisabled={isDisabled}>
                {hint}
              </InputHint>
            )}
            <Listbox.Options as="span" className={selectCX.selectOptions()} unmount>
              {children}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </Label>
  );
});

Select.displayName = 'Select';
