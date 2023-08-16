import { ReactNode } from 'react';
import md5 from 'blueimp-md5';

export const getEntityHash = (input: string | number | boolean | ObjectLiteral | ReactNode): string => {
  const stringifiedInput = typeof input === 'object' ? JSON.stringify(input) : String(input);

  const inputHash = md5(stringifiedInput);

  return inputHash;
};
