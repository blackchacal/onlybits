/**
 * @module Utils
 *
 * Set of utility functions.
 *
 * @return {Object} Public methods.
 */
module.exports = function () {

    return {
        isEmpty: function (obj) {
            return Object.keys(obj).length === 0;
        }
    }
}