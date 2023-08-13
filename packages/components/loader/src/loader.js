import { jsx as _jsx } from 'react/jsx-runtime';
import { LoaderIcon } from '@stn-ui/icons';
import { loaderCX } from '@stn-ui/theme';

export const Loader = ({ size = 64, inline, className }) => {
  const iconClassName = loaderCX({ inline: !!inline }, className);
  return _jsx('div', { className: iconClassName, children: _jsx(LoaderIcon, { width: size, height: size }) });
};
// # sourceMappingURL=loader.js.map
