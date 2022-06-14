import { IWidget } from 'modules/Shared/interfaces/Widgets';
import {
  securityEventWidgets,
  useSecurityEvent,
} from 'modules/SecurityEvent/contexts/SecurityEventContext';
import {
  DefaultPageContainer,
  GridItem,
  LoadingHandler,
} from 'modules/Shared/components';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { useEffect, useState } from 'react';
import { w3cwebsocket, w3cwebsocket as W3CWebSocket } from 'websocket';
import { useLoading } from 'modules/Shared/contexts';

const ResponsiveGridLayout = WidthProvider(Responsive);

const SecurityEvent = () => {
  const widgets: IWidget[] = Object.values(securityEventWidgets).map(
    (w: IWidget) => w
  );

  const layouts = {
    lg: Object.values(securityEventWidgets).map((w: IWidget) => w.options.lg),
  };

  const { widgetsHandlersMap } = useSecurityEvent();
  const { setIsLoading, isLoading } = useLoading();
  const [websocket, setWebsocket] = useState<w3cwebsocket>();

  if (process.env.REACT_APP_ENVIRONMENT !== 'test') {
    useEffect(() => {
      setIsLoading(true);
      if (!websocket) {
        setWebsocket(
          new W3CWebSocket(`${process.env.REACT_APP_WS_API_URL}/securityEvent`)
        );
      }
      if (websocket) {
        websocket.onmessage = ({ data }) => {
          const parsedData = JSON.parse(String(data));
          Object.keys(parsedData).forEach((key) => {
            widgetsHandlersMap[key](parsedData[key]);
          });
          if (isLoading) setIsLoading(false);
        };
      }
      return () => {
        websocket?.close();
      };
    }, [websocket]);
  }

  return (
    <DefaultPageContainer>
      <ResponsiveGridLayout
        isResizable={false}
        isDraggable={false}
        breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 }}
        style={{ flex: 1 }}
        layouts={layouts}
      >
        {widgets.map((w) => (
          <GridItem widget={w} key={w.identifier}>
            <LoadingHandler>{w.builder()}</LoadingHandler>
          </GridItem>
        ))}
      </ResponsiveGridLayout>
    </DefaultPageContainer>
  );
};

export default SecurityEvent;
