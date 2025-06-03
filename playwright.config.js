
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

const config = ({
  testDir: './tests',
  timeout : 40000,
  expect:{
    timeout : 40000
  },
  use: {
    browserName :'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'retain-on-failure'
  },

  reporter: 'html'

});
module.exports = config
