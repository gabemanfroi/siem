import { render } from '@testing-library/react';
import GridItem from './index';

const componentToBeRendered = (
  <GridItem
    isDraggable
    isResizable
    widget={{
      options: { lg: { w: 6, i: '0', h: 6, x: 0, y: 0 }, active: true },
      builder: () => <div />,
      identifier: 'identifier',
    }}
    key="testKey"
  >
    <div>Test Content</div>
  </GridItem>
);

describe('GridItem', () => {
  const setup = () => render(componentToBeRendered);

  it('must render the component', () => {
    const { container } = setup();

    expect(container).not.toBeNull();
  });
});
