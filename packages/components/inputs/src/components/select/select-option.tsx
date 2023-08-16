import { HTMLAttributes, ReactElement, ReactNode, forwardRef } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckThinIcon } from '@stn-ui/icons';
import { selectOptionCX } from '@stn-ui/theme';
import { SelectOptionRenderPropArg, SelectItemValue } from '../../types';

export interface SelectOptionProps extends HTMLAttributes<HTMLSpanElement> {
  value: SelectItemValue;
  label?: string;
  elementLeft?: ReactNode;
  isDisabled?: boolean;
}

export const SelectOption = forwardRef<HTMLInputElement, SelectOptionProps>((props, ref) => {
  const { value, label, elementLeft, isDisabled, children, ...restProps } = props;

  const renderOptionBody = ({ selected, active, disabled }: SelectOptionRenderPropArg): ReactElement => {
    const optionClassNames = selectOptionCX.optionBody({
      active,
      selected,
      disabled,
    });

    return (
      <span className={optionClassNames}>
        {!!elementLeft && <span className={selectOptionCX.addonElement()}>{elementLeft}</span>}
        {children}
        {selected && <CheckThinIcon className={selectOptionCX.checkIcon()} />}
      </span>
    );
  };

  return (
    <Listbox.Option
      value={value}
      as="span"
      aria-label={label}
      ref={ref}
      disabled={isDisabled}
      className={selectOptionCX.option()}
      {...restProps}
    >
      {renderOptionBody}
    </Listbox.Option>
  );
});

SelectOption.displayName = 'SelectOption';
