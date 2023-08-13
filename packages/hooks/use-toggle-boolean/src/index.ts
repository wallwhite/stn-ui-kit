import { useState, useCallback } from 'react';

export interface UseToggleBooleanBag {
  on: () => void;
  off: () => void;
  toggle: () => void;
}

export type UseToggleBooleanOutput = [boolean, UseToggleBooleanBag];

export const useToggleBoolean = (defaultState = false): UseToggleBooleanOutput => {
  const [state, setState] = useState(defaultState);

  const on = useCallback(() => {
    setState(true);
  }, []);

  const off = useCallback(() => {
    setState(false);
  }, []);

  const toggle = useCallback(() => {
    setState((currentState) => !currentState);
  }, []);

  return [
    state,
    {
      on,
      off,
      toggle,
    },
  ];
};
