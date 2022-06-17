import '@testing-library/react';
import '@testing-library/jest-dom';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env.test' });

// eslint-disable-next-line no-undef
jest.mock('react-apexcharts', () => ({
  __esModule: true,
  default: () => <div />,
}));
