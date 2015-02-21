/**
 * @module Drawables
 *
 * This module defines the main drawable class that all drawable components
 * should inherit. It also defines some default drawable components. It defines
 * generic configurations that all drawable components can override.
 *
 * @requires module:Utils
 *
 * @return {Object} Default drawables.
 */
module.exports = (function (utils) {
    "use strict";

/* ----- Drawable class ----------------------------------------------------- */

    function Drawable () {
        this.id = "";
        this.config = {};
        this.logic = "";
        this.connections = [];
    };

    Drawable.prototype._setDrawableConfig = function (drawable_config) {
        var default_config = {
            size: { width: 100, height: 100 },
            position: { top: 10, left: 10 },
            images: [""],
            input: false,
            endpoints: [
                { anchor: "Top" },
                { anchor: "Right" },
                { anchor: "Bottom" },
                { anchor: "Left" }
            ]
        };

        return utils.whiteListObject(default_config, drawable_config);
    };

    Drawable.prototype.updateId = function (new_id) {
        this.id = (new_id !== undefined) ? new_id : this.id;
    };

    Drawable.prototype.addConnection = function (connection_id) {
        this.connections.push(connection_id);
    };

    Drawable.prototype.toString = function () {
        return "Drawable: "+this.id;
    };


/* ----- OR Gate class ------------------------------------------------------ */

    OrGate.prototype = new Drawable();
    OrGate.prototype.constructor = OrGate;

    function OrGate () {
        this.id = "OR_gate";

        this.config = this._setDrawableConfig({
            size: { width: 100, height: 50 },
            images: ["../assets/imgs/OR_ANSI.svg"],
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        });

        this.logic = "%1 or %2";
    };

/* ----- NOR Gate class ------------------------------------------------------ */

    NorGate.prototype = new Drawable();
    NorGate.prototype.constructor = NorGate;

    function NorGate () {
        this.id = "NOR_gate";

        this.config = this._setDrawableConfig({
            size: { width: 100, height: 50 },
            images: ["../assets/imgs/NOR_ANSI.svg"],
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        });

        this.logic = "%1 nor %2";
    };

/* ----- AND Gate class ----------------------------------------------------- */

    AndGate.prototype = new Drawable();
    AndGate.prototype.constructor = AndGate;

    function AndGate () {
        this.id = "AND_gate";

        this.config = this._setDrawableConfig({
            size: { width: 100, height: 50 },
            images: ["../assets/imgs/AND_ANSI.svg"],
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        });

        this.logic = "%1 and %2";
    };

/* ----- NAND Gate class ----------------------------------------------------- */

    NandGate.prototype = new Drawable();
    NandGate.prototype.constructor = NandGate;

    function NandGate () {
        this.id = "NAND_gate";

        this.config = this._setDrawableConfig({
            size: { width: 100, height: 50 },
            images: ["../assets/imgs/NAND_ANSI.svg"],
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        });

        this.logic = "%1 nand %2";
    };

/* ----- XOR Gate class ----------------------------------------------------- */

    XorGate.prototype = new Drawable();
    XorGate.prototype.constructor = XorGate;

    function XorGate () {
        this.id = "XOR_gate";

        this.config = this._setDrawableConfig({
            size: { width: 100, height: 50 },
            images: ["../assets/imgs/XOR_ANSI.svg"],
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        });

        this.logic = "%1 xor %2";
    };

/* ----- XNOR Gate class ----------------------------------------------------- */

    XnorGate.prototype = new Drawable();
    XnorGate.prototype.constructor = XnorGate;

    function XnorGate () {
        this.id = "XNOR_gate";

        this.config = this._setDrawableConfig({
            size: { width: 100, height: 50 },
            images: ["../assets/imgs/XNOR_ANSI.svg"],
            endpoints: [
                { anchor: [0.02, 0.30, -1, 0, 0, 0] },
                { anchor: [0.02, 0.70, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        });

        this.logic = "%1 xnor %2";
    };

/* ----- NOT Gate class ----------------------------------------------------- */

    NotGate.prototype = new Drawable();
    NotGate.prototype.constructor = NotGate;

    function NotGate () {
        this.id = "NOT_gate";

        this.config = this._setDrawableConfig({
            size: { width: 100, height: 50 },
            images: ["../assets/imgs/NOT_ANSI.svg"],
            endpoints: [
                { anchor: [0.02, 0.5, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        });

        this.logic = "not %1";
    };

/* ----- Buffer Gate class -------------------------------------------------- */

    BufferGate.prototype = new Drawable();
    BufferGate.prototype.constructor = BufferGate;

    function BufferGate () {
        this.id = "Buffer_gate";

        this.config = this._setDrawableConfig({
            size: { width: 100, height: 50 },
            images: ["../assets/imgs/Buffer_ANSI.svg"],
            endpoints: [
                { anchor: [0.02, 0.5, -1, 0, 0, 0] },
                { anchor: [0.98, 0.5, 1, 0, 0, 0] },
            ]
        });

        this.logic = "%1";
    };

/* ----- Logic Input class -------------------------------------------------- */

    Input.prototype = new Drawable();
    Input.prototype.constructor = Input;

    function Input () {
        this.id = "Input";

        this.config = this._setDrawableConfig({
            size: { width: 50, height: 50 },
            input: true,
            images: ["../assets/imgs/Input_FALSE.svg", "../assets/imgs/Input_TRUE.svg"],
            endpoints: [
                { anchor: [0.98, 0.5, 1, 0, 0, 0] }
            ]
        });

        this.logic = "false";
    };

/* ----- Utility functions -------------------------------------------------- */

    function _loadDrawable (drawable_name, drawable_group) {
        var drawables_list = require('./drawables/drawables-list.js'),
            default_drawables = {
                or: new OrGate,
                nor: new NorGate,
                and: new AndGate,
                nand: new NandGate,
                xor: new XorGate,
                xnor: new XnorGate,
                not: new NotGate,
                buffer: new BufferGate,
                input: new Input
            };

        if (default_drawables.hasOwnProperty(drawable_name)) {
            return default_drawables[drawable_name];
        } else {
            var drawable = drawables_list[drawable_group][drawable_name];

            drawable.prototype = new Drawable();
            drawable.prototype.constructor = drawable;

            return new drawable;
        }
    };

/* ----- Module returns ----------------------------------------------------- */

    return {
        load: _loadDrawable
    }

})(require('../utils.js'));