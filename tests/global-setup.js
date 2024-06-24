import process from 'process';

export const setup = () => {
  process.env.TZ = 'America/Denver';
};
