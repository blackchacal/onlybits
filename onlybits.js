(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.OnlyBits = require('./core.js');
},{"./core.js":2}],2:[function(require,module,exports){
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
},{"./ui/drawarea.js":13}],3:[function(require,module,exports){
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

    function create (drawable_name, drawable_group) {

        var drawables_list = require('./drawables/drawables_list.js');
        var drawable = drawables_list[drawable_group][drawable_name];

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
},{"../utils.js":15,"./drawables/drawables_list.js":4}],4:[function(require,module,exports){
/**
 * List of all available drawable components organized by groups.
 */
module.exports = {
    logic: {
        or: require('./logic/or.js'),
        nor: require('./logic/nor.js'),
        xor: require('./logic/xor.js'),
        xnor: require('./logic/xnor.js'),
        not: require('./logic/not.js'),
        and: require('./logic/and.js'),
        nand: require('./logic/nand.js'),
        buffer: require('./logic/buffer.js')
    }
}
},{"./logic/and.js":5,"./logic/buffer.js":6,"./logic/nand.js":7,"./logic/nor.js":8,"./logic/not.js":9,"./logic/or.js":10,"./logic/xnor.js":11,"./logic/xor.js":12}],5:[function(require,module,exports){
/**
 * @module And
 *
 * Represents the AND logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "AND_gate",

        config: {
            size: { width: 100, height: 50 },
            image: "./assets/imgs/AND_ANSI.svg",
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: ""
    }

})();
},{}],6:[function(require,module,exports){
/**
 * @module Buffer
 *
 * Represents the Buffer logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "Buffer_gate",

        config: {
            size: { width: 100, height: 50 },
            image: "./assets/imgs/Buffer_ANSI.svg",
            endpoints: [
                { anchor: [0.02, 0.5, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: ""
    }

})();
},{}],7:[function(require,module,exports){
/**
 * @module Nand
 *
 * Represents the NAND logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "NAND_gate",

        config: {
            size: { width: 100, height: 50 },
            image: "./assets/imgs/NAND_ANSI.svg",
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: ""
    }

})();
},{}],8:[function(require,module,exports){
/**
 * @module Nor
 *
 * Represents the NOR logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "NOR_gate",

        config: {
            size: { width: 100, height: 50 },
            image: "./assets/imgs/NOR_ANSI.svg",
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: ""
    }

})();
},{}],9:[function(require,module,exports){
/**
 * @module Not
 *
 * Represents the NOT logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "NOT_gate",

        config: {
            size: { width: 100, height: 50 },
            image: "./assets/imgs/NOT_ANSI.svg",
            endpoints: [
                { anchor: [0.02, 0.5, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: ""
    }

})();
},{}],10:[function(require,module,exports){
/**
 * @module Or
 *
 * Represents the OR logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "OR_gate",

        config: {
            size: { width: 100, height: 50 },
            image: "./assets/imgs/OR_ANSI.svg",
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: ""
    }

})();
},{}],11:[function(require,module,exports){
/**
 * @module Xnor
 *
 * Represents the XNOR logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "XNOR_gate",

        config: {
            size: { width: 100, height: 50 },
            image: "./assets/imgs/XNOR_ANSI.svg",
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: ""
    }

})();
},{}],12:[function(require,module,exports){
/**
 * @module Xor
 *
 * Represents the XOR logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "XOR_gate",

        config: {
            size: { width: 100, height: 50 },
            image: "./assets/imgs/XOR_ANSI.svg",
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: ""
    }

})();
},{}],13:[function(require,module,exports){
/**
 * @module DrawArea
 *
 * Represents the project drawing area. It's responsable for keeping track of
 * drawable components.
 *
 * @requires module:jsplumb (Require JS format)
 * @requires module:Utils
 * @requires module:Renderer
 * @requires module:Drawable
 *
 * @param  {string} container_id Main container id.
 * @param  {Object} config       Main configuration.
 * @return {Object}              Public methods.
 */
module.exports = function (container_id, config) {

    /**
     * Utilities Module.
     *
     * @private
     * @type {Object}
     */
    var utils = require('../utils.js');

    /**
     * jsPlumb main container id. This is the dom element container for all jsPlumb
     * objects and interaction.
     *
     * @private
     * @type {string}
     */
    var container_id = container_id;

    /**
     * The main jsPlumb instance.
     *
     * @private
     * @type {Object}
     */
    var diagrammer;

    /**
     * List of all components inside the drawing area. Only the "objects", not the
     * connections.
     *
     * @private
     * @type {Array}
     */
    var components = [];

    /**
     * Default configuration for the drawing area.
     *
     * @private
     * @type {Object}
     */
    var defaultConfig = {
        width: 600,
        height: 600,
        grid: {
            isActive: false,
            dx: 10,
            dy: 10
        },
        diagrammer: {
            Anchor: "BottomCenter",
            Anchors: [ null, null ],
            ConnectionsDetachable: true,
            ConnectionOverlays: [],
            Connector: "Flowchart",
            Container: document.body,
            DoNotThrowErrors: false,
            DragOptions: { constrain: true },
            DropOptions: { },
            Endpoint: "Dot",
            Endpoints: [ null, null ],
            EndpointOverlays: [ ],
            EndpointStyle: { fillStyle : "#456" },
            EndpointStyles: [ null, null ],
            EndpointHoverStyle: null,
            EndpointHoverStyles: [ null, null ],
            HoverPaintStyle: null,
            LabelStyle: { color : "black" },
            LogEnabled: false,
            Overlays: [ ],
            MaxConnections: -1,
            PaintStyle: { lineWidth : 8, strokeStyle : "#456" },
            ReattachConnections: false,
            RenderMode: "svg",
            Scope: "OnlyBits_DefaultScope"
        }
    };


    // Set configurations
    utils.whiteListObject(defaultConfig, config);

    /**
     * Initialize jsPlumb and add an instance to this module.
     * @return {null}
     */
    function initDiagrammer () {
        diagrammer = jsPlumb.getInstance(defaultConfig.diagrammer);
        diagrammer.setContainer(container_id);
    }

    /**
     * Set the DOM container for working area and set appropriate styles for
     * jsPlumb usage.
     *
     * @return {null}
     */
    function initContainer () {
        var container = document.getElementById(container_id);

        container.style.position = "relative";
        container.style.border = "1px solid #000";
        container.style.width = defaultConfig.width + "px";
        container.style.height = defaultConfig.height + "px";
        container.style.overflow = "hidden";
        container.style.padding = "none";
    }

    return {
        /**
         * Initialize DrawArea module.
         *
         * @public
         * @return {null}
         */
        init: function () {
            initContainer();
            initDiagrammer();
        },

        addComponent: function (component_name, component_group) {
            var renderer = require('./renderer.js')(container_id, diagrammer),
                drawable = require('./drawable.js')(),
                component = drawable.create(component_name, component_group);

            // Render component
            renderer.render(component.id, component.config);

            // Add to components list.
            components.push({ id: component.id, logic: component.logic });
        }
    };
}
},{"../utils.js":15,"./drawable.js":3,"./renderer.js":14}],14:[function(require,module,exports){
/**
 * @module Renderer
 *
 * Is responsible for creating the drawable components on the DOM and setting
 * the appropriate configuration for interaction with the diagrammer.
 *
 * @param  {string} container_id Main container id.
 * @param  {Object} diagrammer   Diagrammer class/module.
 * @return {Object}              Public methods.
 */
module.exports = function (container_id, diagrammer) {

    var diagrammer = diagrammer;

    var endpoint_options = {
        isSource: true,
        isTarget: true,
        maxConnections: -1,
        endpoint: [ "Dot", { radius: 5} ],
        scope: "logic_connection"
    }

    function createDomElement (drawable_id, drawable_config) {
        var container = document.getElementById(container_id);

        // Create element
        var element = document.createElement("div");
        element.id = drawable_id;
        element.style.position = "absolute";
        element.style.top = drawable_config.position.top+"px";
        element.style.left = drawable_config.position.left+"px";
        element.style.width = drawable_config.size.width+"px";
        element.style.height = drawable_config.size.height+"px";
        element.style.backgroundImage = "url("+drawable_config.image+")";
        element.style.padding = "none";
        element.style.margin = "none";
        element.style.border = "none";

        // Append to container
        container.appendChild(element);
    }

    function createEndpoints (drawable_id, drawable_config) {
        diagrammer.addEndpoints(drawable_id, drawable_config.endpoints, endpoint_options);
    }

    function setElementDraggable (drawable_id) {
        diagrammer.draggable(drawable_id);
    }

    return {
        render: function (drawable_id, drawable_config) {
            createDomElement(drawable_id, drawable_config);
            setElementDraggable(drawable_id);
            createEndpoints(drawable_id, drawable_config);
        }
    }
}
},{}],15:[function(require,module,exports){
/**
 * @module Utils
 *
 * Set of utility functions.
 *
 * @return {Object} Public methods.
 */
module.exports = (function () {

    /**
     * Checks if object is empty, i.e, has no properties.
     *
     * @private
     * @param  {Object}  obj Object to check.
     * @return {Boolean}
     */
    function isEmpty (obj) {
        return Object.keys(obj).length === 0;
    }

    /**
     * Validates an object against a "default" one. Check if new properties exist
     * on "default" object and changes to new value.
     *
     * @private
     * @param  {Object} default_obj "Default" object. Has the valid properties.
     * @param  {Object} obj         Object to be whitelisted.
     * @return {null}
     */
    function whiteListObject (default_obj, obj) {
        if (typeof obj === "object" && !isEmpty(obj)) {
            for (var prop in obj) {
                // Check if property exist and the new value is of the same type.
                if (default_obj.hasOwnProperty(prop) &&
                    typeof default_obj[prop] === typeof obj[prop]){

                    // If property value is also an object, go recursive.
                    if (obj[prop] instanceof Object && !(obj[prop] instanceof Array)) {
                        if (!isEmpty(obj[prop])) {
                            whiteListObject(default_obj[prop], obj[prop]);
                        }
                    } else {
                        default_obj[prop] = obj[prop];
                    }
                }
            }
        }
    }

    /**
     * Creates a new object that inherits from a prototype. Extracted from chapter
     * 6 of "Javascript - The Definitive Guide", 6th Edition from David Flanagan.
     *
     * @param  {Object} p Parent object.
     * @return {Object}   Child object.
     */
    function inherit (p) {
        if (p == null) throw TypeError();
        if (Object.create)
            return Object.create(p);
        var t = typeof p;
        if (t !== "object" && t !== "function") throw TypeError();
        function f() {};
        f.prototype = p;
        return new f();
    }

    return {
        isEmpty: isEmpty,
        whiteListObject: whiteListObject,
        inherit: inherit
    }
})();
},{}]},{},[1]);
