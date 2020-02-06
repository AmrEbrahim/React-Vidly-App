import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://e06c225780e14528b1a9d183460891ec@sentry.io/1777579"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
