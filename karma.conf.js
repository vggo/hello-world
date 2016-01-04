module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch : true,
    hostname: 'localhost',
    port: 8000,

    frameworks: ['jasmine'],

    // start these browsers
    // available browser launchers: http://karma-runner.github.io/0.13/config/browsers.html
    // browsers: ['Firefox', 'Chrome', 'IE'],
    browsers: ['Chrome'],

    // plugins: [ // default: karma-*
    //         'karma-chrome-launcher',
    //         'karma-firefox-launcher',
    //         'karma-jasmine',
    //         'karma-junit-reporter'
    //         ],
    plugins: [
            'karma-jasmine',
            'karma-chrome-launcher'
            ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    // logLevel: config.LOG_DEBUG,

    // reporters: ['junit'],  // or $ karma start --reporters junit
    junitReporter : {
      outputDir: 'test_out',
      outputFile: 'unit.xml',
      suite: 'seed',
      useBrowserName: false
    },

    singleRun: true
  });
};
