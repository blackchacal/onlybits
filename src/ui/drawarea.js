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
module.exports = (function () {
    "use strict";

    /**
     * jsPlumb main container id. This is the dom element container for all jsPlumb
     * objects and interaction.
     *
     * @private
     * @type {string}
     */
    var _container_id;

    /**
     * The main jsPlumb instance.
     *
     * @private
     * @type {Object}
     */
    var _diagrammer;

    /**
     * List of all components inside the drawing area. Only the "objects", not the
     * connections.
     *
     * @private
     * @type {Array}
     */
    var _components = [];

    /**
     * Default configuration for the drawing area.
     *
     * @private
     * @type {Object}
     */
    var _defaultConfig = {
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

    /**
     * Initialize jsPlumb and add an instance to this module.
     * @return {null}
     */
    function _initDiagrammer () {
        _diagrammer = jsPlumb.getInstance(_defaultConfig.diagrammer);
        _diagrammer.setContainer(_container_id);
    }

    /**
     * Set the DOM container for working area and set appropriate styles for
     * jsPlumb usage.
     *
     * @private
     * @return {null}
     */
    function _initContainer (container_id) {
        _container_id = container_id;
        var container = document.getElementById(container_id);

        container.style.position = "relative";
        container.style.border = "1px solid #000";
        container.style.width = _defaultConfig.width + "px";
        container.style.height = _defaultConfig.height + "px";
        container.style.overflow = "hidden";
        container.style.padding = "none";
    }

    /**
     * Creates a unique id for the drawable components. The id is basically the
     * concatenation of the component main id, with a number correspondent to the
     * element insertion order.
     *
     * @private
     * @param  {string} component_id Drawable component main id.
     * @return {string}              Drawable component final/effective id.
     */
    function _uniqueId (component_id) {
        return component_id + "_" + (_components.length + 1);
    }

    return {
        /**
         * Initialize DrawArea module.
         *
         * @public
         * @return {null}
         */
        init: function (container_id, config) {
            var _utils = require('../utils.js');
            // Set configurations
            _utils.whiteListObject(_defaultConfig, config);

            _initContainer(container_id);
            _initDiagrammer();
        },

        /**
         * Adds a drawable component to the drawing area, by rendering it and saving,
         * its data on an internal array.
         *
         * @public
         * @param {string} component_name  Drawable component name.
         * @param {string} component_group Drawable component group.
         * @return {null}
         */
        addComponent: function (component_name, component_group) {
            var renderer = require('./renderer.js')(_container_id, _diagrammer),
                drawables = require('./drawables.js'),
                component = drawables.load(component_name, component_group),
                component_id = _uniqueId(component.id);

            // Update component id
            component.updateId(component_id);

            // Render component
            renderer.render(component_id, component.config);

            // Add to components list.
            _components.push(component);
        },

        /**
         * Returns all the components.
         *
         * @public
         * @return {Array} List of drawable components.
         */
        getComponents: function () {
            return _components;
        },

        getDiagrammer: function() {
            return _diagrammer;
        }
    };

})();