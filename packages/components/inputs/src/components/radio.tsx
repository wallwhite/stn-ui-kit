import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { Text } from '@stn-ui/text';
import { radioCX } from '@stn-ui/theme';
import { Label } from './label';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'disabled'> {
  label?: string;
  children?: ReactNode;
  wrapperClassName?: string;
  contentClassName?: string;
  markerClassName?: string;
  error?: string | boolean;
  isWide?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  dataHook?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const {
    wrapperClassName,
    contentClassName,
    markerClassName,
    error,
    label,
    isWide,
    isChecked,
    isDisabled,
    dataHook = 'radio',
    className,
    value,
    children,
    ...rest
  } = props;

  const classNames = radioCX.radio({ error: !!error }, className);
  const contentClassNames = radioCX.content(contentClassName);
  const markerClassNames = radioCX.marker({ markerClassName });

  return (
    <Label isWide={isWide} className={wrapperClassName}>
      <span className={classNames} data-testid={dataHook}>
        <input type="radio" ref={ref} checked={isChecked} value={value} disabled={isDisabled} {...rest} />
        <span className={markerClassNames}>
          <span className={radioCX.markerDot()} data-testid={`${dataHook}-marker`} />
        </span>
        {label && (
          <Text type="body" size="s" dataHook={`${dataHook}-label`}>
            {label}
          </Text>
        )}
        {!label && children && <span className={contentClassNames}>{children}</span>}
      </span>
    </Label>
  );
});

Radio.displayName = 'Radio';

Radio.defaultProps = {
  label: undefined,
  className: undefined,
  isWide: false,
  isChecked: undefined,
  isDisabled: false,
};
