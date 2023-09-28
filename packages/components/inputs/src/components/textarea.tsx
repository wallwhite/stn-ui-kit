import { ReactNode, TextareaHTMLAttributes, forwardRef, useEffect, useRef } from 'react';
// @ts-ignore
import { TextareaAutoSize } from 'textarea-autosize';
import { mergeRefs } from '@stn-ui/react-utils';
import { textareaCX } from '@stn-ui/theme';
import { InputHint } from './input-hint';
import { Label } from './label';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'disabled'> {
  scale?: 's' | 'm';
  warning?: ReactNode | boolean;
  error?: ReactNode | boolean;
  success?: ReactNode | boolean;
  label?: ReactNode;
  elementLeft?: ReactNode;
  elementRight?: ReactNode;
  maxRows?: number;
  isWide?: boolean;
  isDisabled?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const {
    scale = 'm',
    warning,
    error,
    success,
    label,
    maxRows = 5,
    elementLeft,
    elementRight,
    isDisabled,
    isWide,
    ...restProps
  } = props;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const hint = success || warning || error;
  const isHintVisible = hint && (typeof hint === 'string' || typeof hint === 'object');

  const isSuccess = Boolean(success && !error);
  const isWarning = Boolean(warning && !error);

  const classNames = textareaCX.textareaPseudo({
    scale,
    error: !!error,
    isSuccess,
    isWarning,
  });

  useEffect(() => {
    const autosize = new TextareaAutoSize(textAreaRef.current);

    return (): void => {
      try {
        autosize.destroy();
      } catch {
        // do nothing
      }
    };
  }, []);

  return (
    <Label label={label} isWide={isWide} className={textareaCX.wrapper()} labelClassName={textareaCX.label()}>
      <span className={classNames}>
        {elementLeft && <span className={textareaCX.addonElement()}>{elementLeft}</span>}
        <span className={textareaCX.textareaWrapper()}>
          <textarea
            className={textareaCX.textareaElement()}
            id={`${label || 'default'}`}
            rows={1}
            ref={mergeRefs(textAreaRef, ref)}
            disabled={isDisabled}
            style={{ maxHeight: `${maxRows * 18}px` }}
            {...restProps}
          />
        </span>
        {elementRight && <span className={textareaCX.addonElement()}>{elementRight}</span>}
      </span>
      {isHintVisible && (
        <InputHint isError={!!error} isWarning={!!warning} isSuccess={!!success} isDisabled={isDisabled}>
          {hint}
        </InputHint>
      )}
    </Label>
  );
});

Textarea.displayName = 'Textarea';

Textarea.defaultProps = {
  warning: false,
  error: false,
  success: false,
  label: null,
  elementLeft: null,
  elementRight: null,
};
