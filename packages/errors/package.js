Package.describe({
  name: 'errors',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.4.2.3');
  api.use(['ecmascript', 'mongo', 'templating']);
  api.mainModule('errors.js', 'client')
  api.addFiles(['errors.html'], 'client')
});

Package.onTest(function(api) {
  api.use(['ecmascript', 'tinytest', 'errors']);
  api.mainModule('errors-tests.js');
});
