import faker from '@faker-js/faker';

const LastScannedFilesMockFactory = () => {
  const exampleFiles = [
    '/root/super-script',
    '/var/opt/amazing-file',
    '/etc/sample/script',
    '/etc/data/file',
    '/tmp/virus/notavirus',
  ];

  const series = exampleFiles.map(() =>
    faker.datatype.number({ min: 0, max: 100, precision: 1 })
  );

  return { series, labels: exampleFiles };
};

export default LastScannedFilesMockFactory;
