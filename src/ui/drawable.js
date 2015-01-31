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
module.exports = function () {

    var utils = require('../utils.js');

    var drawable_default = {
        size: { width: 100, height: 100 },
        position: { top: 10, left: 10 },
        image: "",
        endpoints: [
            {
                /* [x, y, dx, dy, offsetx, offsety] */
                anchor: [0, 0.5, -1, 0, 0, 0]
            },
            {
                /* [x, y, dx, dy, offsetx, offsety] */
                anchor: [1, 0.5, 1, 0, 0, 0]
            }
        ]
    };

    function setDrawableConfig (drawable_config) {
        utils.whiteListObject(drawable_default, drawable_config);
    }

    function create (drawable) {
        setDrawableConfig(drawable.drawable_config);

        return {
            id: drawable.id,
            drawable_config: drawable_default,
            logic: drawable.logic
        }
    }

    return {
        create: create
    }
}