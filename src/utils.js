module.exports = function () {

    return {
        isEmpty: function (obj) {
            return Object.keys(obj).length === 0;
        }
    }
}