export const IS_SERVER = typeof window === 'undefined';
export const IS_BROWSER = !IS_SERVER;

export const BASE_URL = IS_SERVER
? undefined
: window.location.origin ||
  `${window.location.protocol}//${window.location.hostname}${window.location.port
    ? `:${window.location.port}`
    : ''}`;

let ReactGA;
if (IS_BROWSER) {
  ReactGA = require('react-ga'); // eslint-disable-line global-require
}

// https://github.com/relatenow/relate/blob/a9d2bce46e5314075af7c12bbaa0266865ff25da/hocs/page.js
export function configureAnalytics () {
  if (IS_BROWSER) {
    ReactGA.initialize('UA-92382140-1');
  }
}

export function logPageView () {
  if (IS_BROWSER) {
    const page = window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }
}

export function logEvent (action, label, value) {
  if (IS_BROWSER) {
    ReactGA.event({
      action,
      label,
      value,
      category: 'Interaction',
    });
  }
}
