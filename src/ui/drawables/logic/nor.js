/**
 * @module Nor
 *
 * Represents the NOR logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "NOR_gate",

        config: {
            size: { width: 100, height: 50 },
            images: ["../assets/imgs/NOR_ANSI.svg"],
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: "%1 nor %2",

        connections: []
    }

})();