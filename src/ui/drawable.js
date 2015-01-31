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

    function setDrawableConfig (drawable_config) {
        utils.whiteListObject(drawable_default, drawable_config);
    }

    function create (drawable_type) {
        var drawable;

        switch (drawable_type) {
            case "or":
                drawable = require('./drawables/logic/or.js');
                break;
            default:
                break;
        }

        setDrawableConfig(drawable.config);

        return {
            id: drawable.id,
            config: drawable_default,
            logic: drawable.logic
        }
    }

    return {
        create: create
    }
}