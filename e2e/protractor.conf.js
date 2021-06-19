// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  allScriptsTimeout: 600000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--no-sandbox',
        '--disable-web-security',
        '--window-size=800,600'
      ],
      prefs: {
        download: {
          prompt_for_download: false,
          default_directory: process.cwd() + '\\e2e\\downloads',
          directory_upgrade: true
        }
      }
    },
    specs: [
      './src/**/*.feature'
    ],
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
      require: [
        './steps/**/*.steps.ts'
      ],
      tags: '(not @techdebt) and (not @todo) and (not @fixme) and (not @unit)',
      strict: true,
      format: [
        'json:features-result.json'
      ],
      dryRun: false,
      compiler: []
    },
    onPrepare() {
      require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.json')
      });
    }
  }
};