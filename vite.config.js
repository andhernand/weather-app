import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import child_process from 'child_process';
import fs from 'fs';

const customPort = 6173;
const certificateName = 'weather-app';
const keyFilePath = path.join('./', `${certificateName}.key`);
const certFilePath = path.join('./', `${certificateName}.pem`);

if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
  if (
    0 !==
    child_process.spawnSync(
      'dotnet',
      [
        'dev-certs',
        'https',
        '--export-path',
        certFilePath,
        '--format',
        'Pem',
        '--no-password',
      ],
      { stdio: 'inherit' }
    ).status
  ) {
    throw new Error('Could not create certificate.');
  }
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: customPort,
    https: {
      key: fs.readFileSync(keyFilePath),
      cert: fs.readFileSync(certFilePath),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    testMatch: ['./tests/**/*.test.js?(x)'],
  },
});
