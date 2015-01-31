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
        element.style.border = "1px solid red";

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