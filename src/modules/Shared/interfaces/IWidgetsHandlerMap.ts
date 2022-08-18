import { Dispatch, SetStateAction } from 'react';

export interface IwidgetsHandler {
  [key: string]: Dispatch<SetStateAction<any>>;
}
