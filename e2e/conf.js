exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['createnewevent.js'],
  capabilities: {
    browserName: 'firefox'
  }
}
