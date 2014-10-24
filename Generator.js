/**
 * sails-generate-angular
 *
 * Usage:
 * `sails generate angular`
 *
 * @description Generates a angular
 * @help See http://links.sailsjs.org/docs/generators
 */

module.exports = {

  before: require('./lib/before'),

  targets: {

    // './views/angular': { folder: {} },
    './assets/app': { folder: {} },
    './assets/app/frameworks': { folder: {} },
    './assets/app/libs' : { folder: {} },
    './assets/app/src' : { folder: {} },
    './assets/app/src/controllers': { folder: {} },
    './assets/app/src/views': { folder: {} },
    './assets/app/src/directives': { folder: {} },
    './assets/app/src/services': { folder: {} },
    './assets/app/src/filters': { folder: {} },
    './views/ng-views': { folder: {} },
    
    // Templates
    './views/ng-views/ngrequire.ejs': { template: 'views/angular/include.ejs' },
    './views/ng-views/ngapp.ejs': { template: 'views/angular/app.ejs' },
    './views/ng-views/styles.ejs': { template: 'views/angular/styles.ejs' },
    // Copy files
    './assets/app/src/app.js': { copy: 'app/src/app.js' },
    './assets/app/frameworks/angular.min.js': { copy: 'assets/components/angular/angular.min.js' },
    './assets/app/frameworks/angular.min.js.map': { copy: 'assets/components/angular/angular.min.js.map' },
    './assets/app/libs/jquery.min.js': { copy: 'assets/components/jquery/dist/jquery.min.js' },
    './assets/app/libs/jquery.min.map': { copy: 'assets/components/jquery/dist/jquery.min.map' },
    './assets/app/libs/bootstrap.min.js': { copy: 'assets/components/bootstrap/dist/js/bootstrap.min.js' },
    './assets/styles/bootstrap.min.css': { copy: 'assets/components/bootstrap/dist/css/bootstrap.min.css' },
    './assets/styles/bootstrap-theme.min.css': { copy: 'assets/components/bootstrap/dist/css/bootstrap-theme.min.css' },
  },

  templatesDirectory: require('path').resolve(__dirname, './templates')
};

