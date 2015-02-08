/**
 * @module Logic Input
 *
 * Represents logic input. It can assume the values true/false or 1/0.
 *
 * @return {Object} Public properties and methods.
 */
module.exports = (function () {

    return {
        id: "Input",

        config: {
            size: { width: 50, height: 50 },
            input: true,
            images: ["./assets/imgs/Input_FALSE.svg", "./assets/imgs/Input_TRUE.svg"],
            endpoints: [
                { anchor: [0.98, 0.5, 1, 0, 0, 0] }
            ]
        },

        logic: "false",

        connections: []
    }

})();