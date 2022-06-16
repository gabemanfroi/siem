import React, { forwardRef, ReactNode } from 'react';
import 'react-grid-layout/css/styles.css';

import { Stack } from '@mui/material';
import { MdOutlineClose, MdOutlineDragIndicator } from 'react-icons/md';
import { IWidget } from 'modules/Shared/interfaces/Widgets';
import { useWidgets } from 'modules/Shared/contexts';
import { Container } from './style';

interface IGridItem {
  widget: IWidget;
  children: ReactNode;
  isDraggable: boolean;
  isResizable: boolean;
}

const GridItem = ({
  widget, children, isDraggable,
  isResizable, ...props
}: IGridItem) => {
  const { setSelectedWidgets, selectedWidgets } = useWidgets();

  const handleClose = () => {
    const updatedWidgets = [...selectedWidgets];
    const index = updatedWidgets.findIndex(
      (w) => w.identifier === widget.identifier,
    );

    updatedWidgets.splice(index, 1);
    setSelectedWidgets(updatedWidgets);
  };
  return (
    <Container {...props}>
      {isResizable && isDraggable && <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <MdOutlineDragIndicator className='drag-icon' size={18} />
        <MdOutlineClose
          className='close-icon'
          size={18}
          onClick={handleClose}
        />
      </Stack>}
      <Stack className='react-grid-item'>{children}</Stack>
    </Container>
  );
};
const forwardedGridItemRef = forwardRef(GridItem);

export default forwardedGridItemRef;
