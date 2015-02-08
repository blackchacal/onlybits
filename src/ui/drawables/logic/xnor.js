/**
 * @module Xnor
 *
 * Represents the XNOR logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "XNOR_gate",

        config: {
            size: { width: 100, height: 50 },
            images: ["./assets/imgs/XNOR_ANSI.svg"],
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: "%1 xnor %2",

        connections: []
    }

})();