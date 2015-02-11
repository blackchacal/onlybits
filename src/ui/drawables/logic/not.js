/**
 * @module Not
 *
 * Represents the NOT logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {
    "use strict";

    return {
        id: "NOT_gate",

        config: {
            size: { width: 100, height: 50 },
            images: ["../assets/imgs/NOT_ANSI.svg"],
            endpoints: [
                { anchor: [0.02, 0.5, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: "not %1",

        connections: []
    }

})();