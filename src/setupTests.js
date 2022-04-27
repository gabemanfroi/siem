import '@testing-library/react';
import '@testing-library/jest-dom';

// eslint-disable-next-line no-undef
jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));
