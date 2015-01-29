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

    return {
        init: function() {
            var drawarea = require('./ui/drawarea.js')(container_id, config);

            drawarea.init();
        }
    };
};
},{"./ui/drawarea.js":3}],3:[function(require,module,exports){
/**
 * @module DrawArea
 *
 * Represents the project drawing area. It's responsable for keeping track of
 * drawable components.
 *
 * @requires module:jsplumb (Require JS format)
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
    var utils = require('../utils.js')();

    /**
     * jsPlumb main container id. This is the dom element container for all jsPlumb
     * objects and interaction.
     *
     * @private
     * @type {string}
     */
    var container = container_id;

    /**
     * The main jsPlumb instance.
     *
     * @private
     * @type {Object}
     */
    var plumb;

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
        plumb: {
            Anchor: "BottomCenter",
            Anchors: [ null, null ],
            ConnectionsDetachable: true,
            ConnectionOverlays: [],
            Connector: "Bezier",
            Container: document.body,
            DoNotThrowErrors: false,
            DragOptions: { },
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
            MaxConnections: 1,
            PaintStyle: { lineWidth : 8, strokeStyle : "#456" },
            ReattachConnections: false,
            RenderMode: "svg",
            Scope: "OnlyBits_DefaultScope"
        }
    };


    // Set configurations
    if (typeof config === "object" && !utils.isEmpty(config)) {
        for (var prop in config) {
            if (defaultConfig.hasOwnProperty(prop)) {
                defaultConfig.prop = config.prop;
            }
        }
    }

    /**
     * Initialize jsPlumb and add an instance to this module.
     * @return {null}
     */
    function initPlumb () {
        jsPlumb.ready(function() {
            plumb = jsPlumb.getInstance(defaultConfig.plumb);
            plumb.setContainer(container_id);
        });
    }

    /**
     * Set the DOM container for working area and set appropriate styles for
     * jsPlumb usage.
     *
     * @return {null}
     */
    function initContainer () {
        var container = document.getElementById(container_id);

        container.style.position = 'relative';
        container.style.border = '1px solid #000';
        container.style.width = defaultConfig.width + "px";
        container.style.height = defaultConfig.height + "px";
    }

    /**
     * Initialize DrawArea module.
     *
     * @return {null}
     */
    function init () {
        initContainer();
        initPlumb();
    }

    return {
        init: init
    };
}
},{"../utils.js":4}],4:[function(require,module,exports){
module.exports = function () {

    return {
        isEmpty: function (obj) {
            return Object.keys(obj).length === 0;
        }
    }
}
},{}]},{},[1]);
