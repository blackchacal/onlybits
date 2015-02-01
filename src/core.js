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

    var drawarea = require('./ui/drawarea.js')(container_id, config);

    return {
        init: function() {
            drawarea.init();
        },

        addComponent: function(component_name, component_group) {
            drawarea.addComponent(component_name, component_group);
        }
    };
};