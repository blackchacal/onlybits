/**
 * List of all available drawable components organized by groups.
 */
module.exports = {
    logic: {
        or: require('./logic/or.js'),
        nor: require('./logic/nor.js'),
        xor: require('./logic/xor.js'),
        xnor: require('./logic/xnor.js'),
        not: require('./logic/not.js'),
        and: require('./logic/and.js'),
        nand: require('./logic/nand.js'),
        buffer: require('./logic/buffer.js')
    }
}