if (runningTests) {
  require('smut/tests/test-helper');
} else {
  require('smut/app')['default'].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}
