/**
 * @module Renderer
 *
 * Is responsible for creating the drawable components on the DOM and setting
 * the appropriate configuration for interaction with the diagrammer,
 *
 * @requires module:Utils
 *
 * @param  {string} container_id Main container id.
 * @param  {Object} diagrammer   Diagrammer class/module.
 * @return {Object}              Public methods.
 */
module.exports = function (container_id, diagrammer) {

    var utils = require('../utils.js');

    var diagrammer = diagrammer;

    var endpoint_options = {
        isSource: true,
        isTarget: true,
        maxConnections: -1,
        endpoint: [ "Dot", { radius: 5} ],
        scope: "logic_connection"
    }

    var drawable_default = {
        size: { width: 100, height: 100 },
        position: { top: 10, left: 10 },
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

    function createDomElement (drawable_id) {
        var container = document.getElementById(container_id);

        // Create element
        var element = document.createElement("div");
        element.id = drawable_id;
        element.style.position = "absolute";
        element.style.top = drawable_default.position.top+"px";
        element.style.left = drawable_default.position.left+"px";
        element.style.width = drawable_default.size.width+"px";
        element.style.height = drawable_default.size.height+"px";
        element.style.border = "1px solid red";

        // Append to container
        container.appendChild(element);
    }

    function createEndpoints (drawable_id) {
        diagrammer.addEndpoints(drawable_id, drawable_default.endpoints, endpoint_options);
    }

    function setElementDraggable (drawable_id) {
        diagrammer.draggable(drawable_id);
    }

    return {
        render: function (drawable_id, drawable_config) {
            setDrawableConfig(drawable_config);
            createDomElement(drawable_id);
            setElementDraggable(drawable_id);
            createEndpoints(drawable_id);
        }
    }
}