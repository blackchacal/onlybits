/**
 * @module Logic Expression Builder
 *
 * Responsible for creating the logic expression of the circuit on the drawing
 * area. This expression is then validated by the logic parser.
 *
 * @return {Object} Public methods.
 */
module.exports = (function () {

    /**
     * List of circuit components to build the logic expression. It was used the
     * Object type, to ease the component search, since they're indexed by id.
     *
     * @private
     * @type {Object}
     */
    var _components = {};

    /**
     * Final logic expression.
     *
     * @private
     * @type {String}
     */
    var _expression = "";

    /**
     * Check if the component is an input or not.
     *
     * @private
     * @param  {Object} component Drawable component.
     * @return {Boolean}
     */
    function _isInput (component) {
        return (component.id.search("Input") !== -1);
    }

    /**
     * Populate the _components object with the drawable components from a
     * components array, indexing by component id.
     *
     * @private
     * @param  {Array} components Drawable components list.
     * @return {null}
     */
    function _prepareComponents (components) {
        components.forEach(function(component) {
            _components[component.id] = component;
        });
    }

    /**
     * Replace the placeholders on logic gates expression, by the value of the
     * connected elements. This function is recursive. It works all the way until
     * it finds an input value.
     *
     * @private
     * @param  {Object} component Drawable component.
     * @return {string}           Logic expression for the component logic chain.
     */
    function _replacePlaceholdersValues (component) {
        var logic = component.logic,
            connections = component.connections;

        if (connections.length > 0) {
            connections.forEach(function(connection, index) {
                if (_isInput(_components[connection])) {
                    logic = logic.replace("%"+(index+1), _components[connection].logic);
                } else {
                    // If connection is not input go recursive.
                    logic = logic.replace("%"+(index+1), "("+_replacePlaceholdersValues(_components[connection])+")");
                }
            });
        } else {
            // If component is not connected it doesn't count to the expression
            // formation.
            logic = "";
        }

        return logic;
    }

    /**
     * Create logic expression for each component that's not an input.
     *
     * @private
     * @param  {Object} component Drawable component.
     * @return {null}
     */
    function _componentExpression (component) {
        if (!_isInput(component)) {
            _expression = _replacePlaceholdersValues(component);
        }
    }

    return {
        /**
         * Returns the circuit logic expression.
         * @param  {Array} components Drawable components list.
         * @return {string}           Logic expression.
         */
        createExpression: function (components) {
            _prepareComponents(components);

            components.forEach(function (component) {
                _componentExpression(_components[component.id]);
            });

            return _expression.trim();
        }
    }
})();