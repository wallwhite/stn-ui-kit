/* eslint-disable no-param-reassign */
import { MutableRefObject, RefCallback } from 'react';

export type ReactRef<T> = RefCallback<T> | MutableRefObject<T>;

export const assignRef = <T = unknown>(ref: Maybe<ReactRef<T>>, value: T): void => {
  if (!ref) return;

  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  try {
    ref.current = value;
  } catch (e) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
};

export const mergeRefs = <T>(...refs: (ReactRef<T> | null | undefined)[]) => (value: T | null): void => {
  refs.forEach((ref) => assignRef(ref, value));
};
