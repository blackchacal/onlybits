/**
 * Drawarea module.
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
    var utils = require('./utils.js')();

    /**
     * jsPlumb main container id. This is the dom element container for all jsPlumb
     * objects and interaction.
     *
     * @type {string}
     */
    var container = container_id;

    /**
     * The main jsPlumb instance.
     */
    var plumb;

    /**
     * List of all components inside the drawing area. Only the "objects", not the
     * connections.
     *
     * @type {Array}
     */
    var components = [];

    /**
     * Default configuration for the drawing area.
     *
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

    function initPlumb () {
        jsPlumb.ready(function() {
            plumb = jsPlumb.getInstance(defaultConfig.plumb);
            plumb.setContainer(container_id);
        });
    }

    function initContainer () {
        var container = document.getElementById(container_id);

        container.style.position = 'relative';
        container.style.border = '1px solid #000';
        container.style.width = defaultConfig.width + "px";
        container.style.height = defaultConfig.height + "px";
    }

    function init () {
        initContainer();
        initPlumb();
    }

    return {
        init: init
    };
}