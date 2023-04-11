import { Layout } from 'react-grid-layout';
import { LOCAL_STORAGE_KEY } from 'modules/Shared/core/constants';

export const saveCurrentLayout = (layouts: Layout[]) => {
  const auxiliaryMap: { [key: string]: Layout } = {};
  layouts.forEach((l) => {
    auxiliaryMap[l.i] = l;
  });
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(auxiliaryMap));
};
