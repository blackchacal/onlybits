/**
 * @module Drawable
 *
 * It's a factory class that creates drawable components that can be rendered
 * on the drawing area. It defines generic configurations that all drawable
 * components can override.
 *
 * @requires module:Utils
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    /**
     * Utilities Module.
     *
     * @private
     * @type {Object}
     */
    var _utils = require('../utils.js');

    /**
     * Drawable components default rendering properties.
     *
     * @private
     * @type {Object}
     */
    var _drawable_default = {
        size: { width: 100, height: 100 },
        position: { top: 10, left: 10 },
        images: [""],
        input: false,
        endpoints: [
            {
                anchor: "Top"
            },
            {
                anchor: "Right"
            },
            {
                anchor: "Bottom"
            },
            {
                anchor: "Left"
            }
        ]
    };

    /**
     * White lists the drawable config agains the defaults.
     *
     * @private
     * @param {Object} drawable_config Drawable configuration object.
     */
    function _setDrawableConfig (drawable_config) {
        _utils.whiteListObject(_drawable_default, drawable_config);
    }

    return {
        /**
         * Creates a drawable component based on the name and group.
         *
         * @public
         * @param  {string} drawable_name  Drawable name.
         * @param  {string} drawable_group Drawable group.
         * @return {Object}                Drawable object.
         */
        create: function (drawable_name, drawable_group) {
            var drawables_list = require('./drawables/drawables-list.js');
            var drawable = drawables_list[drawable_group][drawable_name];

            _setDrawableConfig(drawable.config);

            return {
                id: drawable.id,
                config: _drawable_default,
                logic: drawable.logic,
                connections: drawable.connections
            }
        }
    }
})();