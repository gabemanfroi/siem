import { render } from '@testing-library/react';
import GridItem from './index';

const componentToBeRendered = (
  <GridItem key="testKey">
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
