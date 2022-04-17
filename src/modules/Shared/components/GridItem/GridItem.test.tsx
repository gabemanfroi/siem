import { render } from '@testing-library/react';
import GridItem from './index';

const componentToBeRendered = (
  <GridItem key="testKey">
    <h1>Test Content</h1>
  </GridItem>
);

describe('GridItem', () => {
  it('must render the component', () => {
    const { container } = render(componentToBeRendered);

    expect(container).not.toBeNull();
  });
});
