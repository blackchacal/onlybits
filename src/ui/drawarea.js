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
            Connector: "Bezier",
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
                drawable = require('./drawable.js')();
                component = drawable.create(component_name, component_group);

            // Render component
            renderer.render(component.id, component.config);

            // Add to components list.
            components.push({ id: component.id, logic: component.logic });
        }
    };
}