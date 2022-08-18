import { IWidgetsHandler } from 'modules/Shared/interfaces/Widgets';

export const fillWidgetsWithData = (
  data: any,
  widgetsHandler: IWidgetsHandler
) => {
  Object.keys(data).forEach((key) => {
    if (widgetsHandler[key]) {
      widgetsHandler[key](data[key]);
    }
  });
};
