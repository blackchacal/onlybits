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

    /**
     * Configuration object.
     *
     * @private
     * @type {Object}
     */
    var _config = {};

    /**
     * Drawarea module instance.
     *
     * @private
     * @type {Object}
     */
    var _drawarea = require('./ui/drawarea.js')(container_id, _config);

    return {
        /**
         * App initialization. Creates and prepares the drawing area for usage.
         *
         * @public
         * @return {null}
         */
        init: function() {
            _drawarea.init();
        },

        /**
         * Adds a drawable component to the drawing area.
         *
         * @public
         * @param {string} component_name  Drawable name.
         * @param {string} component_group Drawable group.
         * @return {null}
         */
        addComponent: function(component_name, component_group) {
            _drawarea.addComponent(component_name, component_group);
        }
    };
};