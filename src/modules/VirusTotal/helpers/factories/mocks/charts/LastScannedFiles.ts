import { BasicDonutChartMockFactory } from 'modules/Shared/helpers/factories';

const LastScannedFilesMockFactory = () => {
  const exampleFiles = [
    '/root/super-script',
    '/var/opt/amazing-file',
    '/etc/sample/script',
    '/etc/data/file',
    '/tmp/virus/notavirus',
  ];

  return BasicDonutChartMockFactory(exampleFiles);
};

export default LastScannedFilesMockFactory;
