/**
 * @module Core
 *
 * Main file that assembles the app modules.
 *
 * @requires module:DrawArea
 *
 * @param  {string} container_id Main container id.
 * @return {Object}              Public methods.
 */
module.exports = function (container_id) {

    var config = {};

    return {
        init: function() {
            var drawarea = require('./ui/drawarea.js')(container_id, config);

            drawarea.init();
        }
    };
};