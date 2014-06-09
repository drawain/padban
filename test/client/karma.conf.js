// Karma configuration

module.exports = function(config) {
  config.set({
    basePath: '../../',
    port: 8080,
    logLevel: config.LOG_INFO,

    frameworks: ['jasmine', 'browserify'],
    reporters: [ 'dots', 'growl' ],
    browsers: ['PhantomJS'],

    colors: true,
    autoWatch: true,
    singleRun: false,

    files: [
      'client/bower_components/angular/angular.js',
      'client/bower_components/angular-mocks/angular-mocks.js',
      'client/bower_components/angular-resource/angular-resource.js',
      'client/bower_components/angular-cookies/angular-cookies.js',
      'client/bower_components/angular-sanitize/angular-sanitize.js',
      'client/bower_components/angular-route/angular-route.js',
      'client/bower_components/angular-ui-tree/dist/angular-ui-tree.js',
      'client/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'client/bower_components/angular-round-progress-directive/angular-round-progress-directive.js',
      'client/bower_components/angular-timer/dist/angular-timer.js',
      'test/client/spec/**/*.js'
    ],

    exclude: [],

    preprocessors: {
        'test/client/spec/**/*.js': 'browserify'
    },

    browserify: {
        debug: true,
        external: ['app/bower_components/angular/angular', 'angular'],
        transform: ['es6ify', 'browserify-shim', 'partialify', 'debowerify']
    }
  });
};
