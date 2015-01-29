
module.exports = function (container) {

    var config = {};

    return {
        init: function() {
            var drawarea = require('./drawarea.js')(container, config);

            drawarea.init();
        }
    };
};