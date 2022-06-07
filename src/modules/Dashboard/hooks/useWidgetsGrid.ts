import { useEffect, useState } from 'react';
import {
  ICloseEvent,
  w3cwebsocket as W3CWebSocket,
  w3cwebsocket,
} from 'websocket';

import { useLoading, useWidgets } from 'modules/Shared/contexts';
import { TokenUtil } from 'modules/Shared/utils';
import { useDashboard } from 'modules/Dashboard/contexts';

const useWidgetsGrid = () => {
  const { setIsLoading } = useLoading();
  const { selectedWidgets } = useWidgets();
  const { dashboardWidgetsHandlerMap, filters } = useDashboard();

  const [websocket, setWebsocket] = useState<w3cwebsocket | null>(null);

  const [layouts, setLayouts] = useState({
    lg: selectedWidgets.map((w) => w.options.lg),
  });

  const createConnection = () => {
    setWebsocket(
      new W3CWebSocket(
        `${
          process.env.REACT_APP_WS_API_URL
        }/api/dashboard?jwt=${TokenUtil().getToken()}`
      )
    );
  };

  if (process.env.REACT_APP_ENVIRONMENT !== 'test') {
    useEffect(() => {
      setIsLoading(true);
      if (!websocket) {
        createConnection();
      }
      if (websocket) {
        websocket.onopen = () => {
          const widgetsToGetFromBackend = selectedWidgets.map(
            (w) => w.identifier
          );
          websocket.send(
            JSON.stringify({
              selectedWidgets: widgetsToGetFromBackend,
              initialDate: filters.initialDate,
              endDate: filters.endDate,
            })
          );
        };

        websocket.onmessage = ({ data }) => {
          const parsedData = JSON.parse(String(data));
          Object.keys(parsedData).forEach((key) => {
            dashboardWidgetsHandlerMap[key](parsedData[key]);
          });
          setIsLoading(false);
        };

        websocket.onclose = (event: ICloseEvent) => {
          if (event.reason === 'refresh filters') {
            createConnection();
          }
        };
      }
      return () => {
        websocket?.close();
      };
    }, [websocket]);

    useEffect(() => {
      websocket?.close(1000, 'refresh filters');
    }, [filters]);

    useEffect(() => {
      setLayouts({
        lg: selectedWidgets.map((w) => w.options.lg),
      });
    }, [selectedWidgets]);
  }
  return { layouts };
};

export default useWidgetsGrid;
