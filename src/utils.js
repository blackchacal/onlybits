/**
 * @module Utils
 *
 * Set of utility functions.
 *
 * @return {Object} Public methods.
 */
module.exports = (function () {
    "use strict";

    /**
     * Checks if object is empty, i.e, has no properties.
     *
     * @private
     * @param  {Object}  obj Object to check.
     * @return {Boolean}
     */
    function _isEmpty (obj) {
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
    function _whiteListObject (default_obj, obj) {
        if (typeof obj === "object" && !_isEmpty(obj)) {
            for (var prop in obj) {
                // Check if property exist and the new value is of the same type.
                if (default_obj.hasOwnProperty(prop) &&
                    typeof default_obj[prop] === typeof obj[prop]){

                    // If property value is also an object, go recursive.
                    if (obj[prop] instanceof Object && !(obj[prop] instanceof Array)) {
                        if (!_isEmpty(obj[prop])) {
                            _whiteListObject(default_obj[prop], obj[prop]);
                        }
                    } else {
                        default_obj[prop] = obj[prop];
                    }
                }
            }
        }

        return default_obj;
    }

    /**
     * Creates a new object that inherits from a prototype. Extracted from chapter
     * 6 of "Javascript - The Definitive Guide", 6th Edition from David Flanagan.
     *
     * @private
     * @param  {Object} p Parent object.
     * @return {Object}   Child object.
     */
    function _inherit (p) {
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
        isEmpty: _isEmpty,
        whiteListObject: _whiteListObject,
        inherit: _inherit
    }
})();