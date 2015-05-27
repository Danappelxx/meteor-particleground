Package.describe({
  name: 'danappelxx:particleground',
  version: '0.0.1',
  summary: 'A meteor wrapper for particleground, a plugin for snazzy background particle systems',
  git: 'https://github.com/danappelxx/meteor-particleground',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    'particleground.js'
    ], 'client');
});
