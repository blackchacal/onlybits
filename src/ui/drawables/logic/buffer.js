/**
 * @module Buffer
 *
 * Represents the Buffer logic gate.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "Buffer_gate",

        config: {
            size: { width: 100, height: 50 },
            images: ["./assets/imgs/Buffer_ANSI.svg"],
            endpoints: [
                { anchor: [0.02, 0.5, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        },

        logic: ""
    }

})();