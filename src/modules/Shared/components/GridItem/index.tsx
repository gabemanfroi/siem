import React, { forwardRef, ReactNode } from 'react';
import 'react-grid-layout/css/styles.css';

import { Stack, Typography } from '@mui/material';
import { MdOutlineClose, MdOutlineDragIndicator } from 'react-icons/md';
import { IWidget } from 'modules/Shared/interfaces/Widgets';
import { useWidgets } from 'modules/Shared/hooks';
import { Container } from './style';

interface IGridItem {
  widget: IWidget;
  children: ReactNode;
}

const GridItem = forwardRef(
  ({ widget, children, ...props }: IGridItem, ref) => {
    const { setSelectedWidgets, selectedWidgets, customizeMode } = useWidgets();
    const handleClose = () => {
      const updatedWidgets = [...selectedWidgets];
      const index = updatedWidgets.findIndex(
        (w) => w.identifier === widget.identifier
      );

      updatedWidgets.splice(index, 1);
      setSelectedWidgets(updatedWidgets);
    };
    return (
      <Container ref={ref as React.RefObject<HTMLDivElement>} {...props}>
        {customizeMode && (
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <MdOutlineDragIndicator className="drag-icon" size={18} />
            <MdOutlineClose
              className="close-icon"
              size={18}
              onClick={handleClose}
            />
          </Stack>
        )}
        <Typography variant="h5">{widget.label}</Typography>
        <Stack
          className="react-grid-item"
          sx={{
            '.react-resizable-handle': {
              display: customizeMode ? 'block' : 'none',
            },
          }}
        >
          {children}
        </Stack>
      </Container>
    );
  }
);

export default GridItem;
