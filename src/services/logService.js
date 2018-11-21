// import Raven from 'raven-js';
function init() {
  // Raven.config('https://25955451dff343bf8a1d06e3a34bfa9c@sentry.io/1326689', {
  //   release: '1-0-0',
  //   environment: "development-test"
  // }).install
}
function log(error) {
  // Raven.captureException(error);
  console.error(error)
}

export default {
  init, log
}