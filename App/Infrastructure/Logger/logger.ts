import * as bunyan from 'bunyan';

 export const logger = bunyan.createLogger({
  name: 'Backend',
  streams: [
    {
      level: 'info',
      stream: process.stdout,
    },
    {
      level: 'debug',
      stream: process.stdout,
    },
    {
      level: 'error',
      stream: process.stderr,
    },
  ],
});

