import { Dispatch, SetStateAction } from 'react';

export interface IWidgetsHandler {
  [key: string]: Dispatch<SetStateAction<any>>;
}
