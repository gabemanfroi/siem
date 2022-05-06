import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import GridItem from 'modules/Shared/components/GridItem';
import { useEffect, useState } from 'react';
import { useDashboard, useWidgets } from 'modules/Shared/contexts';
import { w3cwebsocket as W3CWebSocket, w3cwebsocket } from 'websocket';

const ResponsiveGridLayout = WidthProvider(Responsive);

const WidgetsGrid = () => {
  const { widgetsList, saveCurrentLayout } = useWidgets();
  const { widgetsHandlersMap } = useDashboard();

  const [websocket, setWebsocket] = useState<w3cwebsocket>();

  useEffect(() => {
    if (!websocket) {
      setWebsocket(
        new W3CWebSocket(`${process.env.REACT_APP_WS_API_URL}/dashboard`)
      );
    }
    if (websocket) {
      websocket.onopen = () => {
        const widgetsToGetFromBackend = widgetsList.map((w) => w.label);
        websocket.send(
          JSON.stringify({ selectedWidgets: widgetsToGetFromBackend })
        );
      };

      websocket.onmessage = ({ data }) => {
        const parsedData = JSON.parse(String(data));
        Object.keys(parsedData).forEach((key) => {
          widgetsHandlersMap[key](parsedData[key]);
        });
      };
    }
    return () => {
      websocket?.close();
    };
  }, [websocket]);

  const [layouts] = useState({
    lg: widgetsList.map((w) => w.options.lg),
  });

  if (widgetsList.length === 0) return <></>;

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
      {widgetsList.map((w) => (
        <GridItem key={w.options.lg.i}>{w.builder()}</GridItem>
      ))}
    </ResponsiveGridLayout>
  );
};

export default WidgetsGrid;
