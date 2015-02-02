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

    /**
     * Diagrammer instance.
     *
     * @private
     * @type {Object}
     */
    var _diagrammer = diagrammer;

    /**
     * Drawable endpoint options. Its used on all drawable endpoints.
     *
     * @private
     * @type {Object}
     */
    var _endpoint_options = {
        isSource: true,
        isTarget: true,
        maxConnections: -1,
        endpoint: [ "Dot", { radius: 5} ],
        scope: "logic_connection"
    }

    /**
     * Creates drawable element on DOM tree and sets the necessary styles to
     * interact properly with the diagrammer.
     *
     * @param  {string} drawable_id     Drawable effective id.
     * @param  {Object} drawable_config Drawable configuration object.
     * @return {null}
     */
    function _createDomElement (drawable_id, drawable_config) {
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

    /**
     * Create all the endpoints for the drawable component.
     *
     * @private
     * @param  {string} drawable_id     Drawable effective id.
     * @param  {string} drawable_config Drawable configuration object.
     * @return {null}
     */
    function _createEndpoints (drawable_id, drawable_config) {
        _diagrammer.addEndpoints(drawable_id, drawable_config.endpoints, _endpoint_options);
    }

    /**
     * Add draggable properties to the drawable component.
     *
     * @private
     * @param  {string} drawable_id Drawable effective id.
     * @return {null}
     */
    function _setElementDraggable (drawable_id) {
        _diagrammer.draggable(drawable_id);
    }

    return {
        /**
         * Render the drawable component.
         *
         * @public
         * @param  {string} drawable_id     Drawable effective id.
         * @param  {string} drawable_config Drawable configuration object.
         * @return {null}
         */
        render: function (drawable_id, drawable_config) {
            _createDomElement(drawable_id, drawable_config);
            _setElementDraggable(drawable_id);
            _createEndpoints(drawable_id, drawable_config);
        }
    }
}