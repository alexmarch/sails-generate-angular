/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');
_.defaults = require('merge-defaults');

/**
   * `before()` is run before executing any of the `targets`
   * defined below.
   *
   * This is where we can validate user input, configure default
   * scope variables, get extra dependencies, and so on.
   *
   * @param  {Object} scope
   * @param  {Function} cb    [callback]
   */
function before(scope, cb) {
		
		this.INVALID_SCOPE_VARIABLE = function  (varname, details, message) {
		  var DEFAULT_MESSAGE =
		  'Issue encountered in generator "angular":\n'+
		  'Missing required scope variable: `%s`"\n' +
		  'If you are the author of `sails-generate-angular`, please resolve this '+
		  'issue and publish a new patch release.';

		  message = (message || DEFAULT_MESSAGE) + (details ? '\n'+details : '');
		  message = util.inspect(message, varname);

  		return new Error(message);
		}
    // scope.args are the raw command line arguments.
    //
    // e.g. if someone runs:
    // $ sails generate angular user find create update
    // then `scope.args` would be `['user', 'find', 'create', 'update']`
    // if (!scope.args[0]) {
    //   return cb( new Error('Please provide a name for this angular.') );
    // }

    // scope.rootPath is the base path for this generator
    //
    // e.g. if this generator specified the target:
    // './Foobar.md': { copy: 'Foobar.md' }
    //
    // And someone ran this generator from `/Users/dbowie/sailsStuff`,
    // then `/Users/dbowie/sailsStuff/Foobar.md` would be created.
    if (!scope.rootPath) {
      return cb( this.INVALID_SCOPE_VARIABLE('rootPath') );
    }


    // Attach defaults
    _.defaults(scope, {
      createdAt: new Date()
    });

    // Decide the output filename for use in targets below:
    // scope.filename = scope.args[0];

    // Add other stuff to the scope for use in our templates:
    // scope.whatIsThis = 'an example file created at '+scope.createdAt;

    // When finished, we trigger a callback with no error
    // to begin generating files/folders as specified by
    // the `targets` below.
    cb();
}



module.exports = before;
