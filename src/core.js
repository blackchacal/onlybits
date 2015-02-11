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
module.exports = (function () {
    "use strict";

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
    var _drawarea = require('./ui/drawarea.js');

    return {
        /**
         * App initialization. Creates and prepares the drawing area for usage.
         *
         * @public
         * @return {null}
         */
        init: function(container_id) {
            _drawarea.init(container_id, _config);

            return this;
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
        },

        createLogicExpression: function () {
            var expression_builder = require("./logic-expression-builder.js");
            var components = _drawarea.getComponents();

            return expression_builder.createExpression(components);
        },

        bool: function (expression) {
            var parser = require("../lib/logic-parser.js");

            return parser.parse(expression);
        }
    };
})();