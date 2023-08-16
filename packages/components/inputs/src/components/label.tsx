import { forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { Text } from '@stn-ui/text';
import { labelCX } from '@stn-ui/theme';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement | HTMLSpanElement> {
  label?: ReactNode;
  className?: string;
  labelClassName?: string;
  htmlFor?: string;
  isWide?: boolean;
  isForm?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, PropsWithChildren<LabelProps>>((props, ref) => {
  const { label, className, labelClassName, htmlFor, children, isWide, isForm = true, ...restProps } = props;

  const classNames = labelCX.label({ isWide }, className);
  const labelTextClassNames = labelCX.labelText(labelClassName);

  const renderLabel = (): ReactNode => (
    <>
      {label && (
        <Text type="caption" variant="label" size="l" className={labelTextClassNames} isWide={isWide}>
          {label}
        </Text>
      )}
      {children && <span className={labelCX.labelContent()}>{children}</span>}
    </>
  );

  return isForm ? (
    <label htmlFor={htmlFor} className={classNames} ref={ref} {...restProps}>
      {renderLabel()}
    </label>
  ) : (
    <span className={classNames} ref={ref} {...restProps}>
      {renderLabel()}
    </span>
  );
});

Label.displayName = 'Label';

Label.defaultProps = {
  label: null,
  className: '',
  labelClassName: '',
  htmlFor: undefined,
  isWide: true,
};
