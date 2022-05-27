import React, { ReactNode } from 'react';
import 'react-grid-layout/css/styles.css';

import { Stack } from '@mui/material';
import { MdOutlineDragIndicator, MdOutlineClose } from 'react-icons/md';
import { IWidget } from 'modules/Shared/interfaces/Widgets';
import { useWidgets } from 'modules/Shared/contexts';
import { Container } from './style';

interface IGridItem {
  widget: IWidget;
  children: ReactNode;
}

const GridItem = ({ widget, children, ...props }: IGridItem) => {
  const { setSelectedWidgets, selectedWidgets } = useWidgets();
  const handleClose = () => {
    const updatedWidgets = [...selectedWidgets];
    const index = updatedWidgets.findIndex(
      (w) => w.identifier === widget.identifier
    );

    updatedWidgets.splice(index, 1);
    setSelectedWidgets(updatedWidgets);
  };

  return (
    <Container {...props}>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <MdOutlineClose
          className="close-icon"
          size={24}
          onClick={handleClose}
        />
        <MdOutlineDragIndicator className="drag-icon" size={30} />
      </Stack>
      {children}
    </Container>
  );
};

export default GridItem;
