import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationItem from './index';

const routerRender = () =>
  render(
    <MemoryRouter>
      <NavigationItem path="/test1" title="Test Title 1">
        <div>Test Icon 1</div>
      </NavigationItem>
      <NavigationItem path="/test2" title="Test Title 2">
        <div>Test Icon 2</div>
      </NavigationItem>
    </MemoryRouter>
  );

describe('NavigationItem', () => {
  it('must render the component', () => {
    const { container } = routerRender();

    expect(container);
  });
  it('buttons must be clickable', () => {
    const { getByText } = routerRender();

    const otherPageButton = getByText('Test Icon 2');
    fireEvent.click(otherPageButton);
  });
});
