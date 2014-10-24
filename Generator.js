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

    './views/angular': { folder: {} },
    './assets/app/frameworks': { folder: {} },
    './assets/app/libs' : { folder: {} },
    './assets/app/src' : {folder: {} },
    './assets/app/src/controllers': {folder: {} },
    './assets/app/src/views': {folder: {} },
    './assets/app/src/directives': {folder: {} },
    './assets/app/src/services': {folder: {} },
    './assets/app/src/filters': {folder: {} },
    
    // Templates
    './views/angular': { template: 'views/angular/include.ejs' },
    './assets/app/src': { template: 'app/src/app.js' },
    // Copy files
    './assets/app/frameworks/angular.min.js': { copy: 'assets/components/angular/angular.min.js' },
    './assets/app/libs/jquery.min.js': { copy: 'assets/components/jquery/dist/jquery.min.js' },
    './assets/app/libs/bootstrap.min.js': { copy: 'assets/components/bootstrap/dist/js/bootstrap.min.js' }
  },

  templatesDirectory: require('path').resolve(__dirname, './templates')
};

