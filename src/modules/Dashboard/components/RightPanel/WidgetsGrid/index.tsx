import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import GridItem from 'modules/Shared/components/GridItem';
import { useEffect, useState } from 'react';
import { useDashboard, useLoading, useWidgets } from 'modules/Shared/contexts';
import { w3cwebsocket as W3CWebSocket, w3cwebsocket } from 'websocket';
import { LoadingHandler } from 'modules/Shared/components';

const ResponsiveGridLayout = WidthProvider(Responsive);

const WidgetsGrid = () => {
  const { setIsLoading, isLoading } = useLoading();
  const { selectedWidgets, saveCurrentLayout } = useWidgets();
  const { dashboardWidgetsHandlerMap } = useDashboard();

  const [websocket, setWebsocket] = useState<w3cwebsocket>();

  const [layouts, setLayouts] = useState({
    lg: selectedWidgets.map((w) => w.options.lg),
  });

  if (process.env.REACT_APP_ENVIRONMENT !== 'test') {
    useEffect(() => {
      setIsLoading(true);
      if (!websocket) {
        setWebsocket(
          new W3CWebSocket(`${process.env.REACT_APP_WS_API_URL}/dashboard`)
        );
      }
      if (websocket) {
        websocket.onopen = () => {
          const widgetsToGetFromBackend = selectedWidgets.map(
            (w) => w.identifier
          );
          websocket.send(
            JSON.stringify({ selectedWidgets: widgetsToGetFromBackend })
          );
        };

        websocket.onmessage = ({ data }) => {
          const parsedData = JSON.parse(String(data));
          Object.keys(parsedData).forEach((key) => {
            dashboardWidgetsHandlerMap[key](parsedData[key]);
          });
          if (isLoading) setIsLoading(false);
        };
      }
      return () => {
        websocket?.close();
      };
    }, [websocket]);

    useEffect(() => {
      setLayouts({
        lg: selectedWidgets.map((w) => w.options.lg),
      });
    }, [selectedWidgets]);
  }

  if (selectedWidgets.length === 0) return <></>;

  return (
    <ResponsiveGridLayout
      isResizable
      isDraggable
      onLayoutChange={saveCurrentLayout}
      breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 120, sm: 6, xs: 4, xxs: 2 }}
      style={{ flex: 1 }}
      layouts={layouts}
    >
      {selectedWidgets.map((w) => (
        <GridItem key={w.identifier}>
          <LoadingHandler>{w.builder()}</LoadingHandler>
        </GridItem>
      ))}
    </ResponsiveGridLayout>
  );
};

export default WidgetsGrid;
