import React, { forwardRef, ReactNode, useMemo } from 'react';
import 'react-grid-layout/css/styles.css';

import { Stack, Typography } from '@mui/material';
import { MdOutlineClose, MdOutlineDragIndicator } from 'react-icons/md';
import { IWidget } from 'modules/Shared/interfaces/Widgets';
import { white } from 'modules/Shared/helpers/styles/Colors';
import { useWidgetsSelectionContext } from 'modules/Shared/hooks/useWidgetsSelectionContext';
import { useCustomizationContext } from 'modules/Shared/hooks/useCustomizationContext';
import { Container } from './style';

interface IGridItem {
  widget: IWidget;
  children: ReactNode;
}

const GridItem = forwardRef(
  ({ widget, children, ...props }: IGridItem, ref) => {
    const { setSelectedWidgets, selectedWidgets } =
      useWidgetsSelectionContext();
    const { customizationMode } = useCustomizationContext();
    const handleClose = () => {
      const updatedWidgets = [...selectedWidgets];
      const index = updatedWidgets.findIndex(
        (w) => w.identifier === widget.identifier
      );

      updatedWidgets.splice(index, 1);
      setSelectedWidgets(updatedWidgets);
    };
    return useMemo(
      () => (
        <Container ref={ref as React.RefObject<HTMLDivElement>} {...props}>
          {customizationMode && (
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
                display: customizationMode ? 'block' : 'none',
                '&:after': {
                  borderColor: white,
                },
              },
            }}
          >
            {children}
          </Stack>
        </Container>
      ),
      []
    );
  }
);

export default GridItem;
