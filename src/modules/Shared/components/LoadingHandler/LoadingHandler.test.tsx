import { cleanup, render } from '@testing-library/react';
import LoadingHandler from './index';

const mockIsLoading = jest.fn();

jest.mock('modules/Shared/contexts', () => ({
  useLoading: () => ({
    isLoading: mockIsLoading(),
  }),
}));

beforeEach(() => {
  mockIsLoading.mockImplementation(() => false);
});

afterEach(cleanup);

afterAll(() => {
  jest.unmock('modules/Shared/contexts');
});

describe('LoadingHandler', () => {
  it('should render the component', () => {
    const { container } = render(
      <LoadingHandler>
        <div>Test</div>
      </LoadingHandler>
    );

    expect(container);
  });
  it('should render a Skeleton if in loading state', () => {
    mockIsLoading.mockImplementation(() => true);
    const { container } = render(
      <LoadingHandler>
        <div className="myElementClass">Test</div>
      </LoadingHandler>
    );

    expect(container.firstChild).toHaveClass('MuiSkeleton-root');
    expect(container.firstChild).not.toHaveClass('myElementClass');
  });
  it('should render the children if not in loading state', () => {
    mockIsLoading.mockImplementation(() => false);
    const { container } = render(
      <LoadingHandler>
        <div className="myElementClass">Test</div>
      </LoadingHandler>
    );

    expect(container.firstChild).not.toHaveClass('MuiSkeleton-root');
    expect(container.firstChild).toHaveClass('myElementClass');
  });
  it('should respond to the state changing', () => {
    mockIsLoading.mockImplementation(() => false);
    const { container } = render(
      <LoadingHandler>
        <div className="myElementClass">Test</div>
      </LoadingHandler>
    );

    expect(container.firstChild).not.toHaveClass('MuiSkeleton-root');
    expect(container.firstChild).toHaveClass('myElementClass');

    mockIsLoading.mockImplementation(() => true);

    const { container: containerAfterStateChanging } = render(
      <LoadingHandler>
        <div className="myElementClass">Test</div>
      </LoadingHandler>
    );

    expect(containerAfterStateChanging.firstChild).toHaveClass(
      'MuiSkeleton-root'
    );
    expect(containerAfterStateChanging.firstChild).not.toHaveClass(
      'myElementClass'
    );
  });
});
