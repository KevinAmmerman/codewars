/**
 * @return {null|boolean|number|string|Array|Object}
 */

const num = [null, {}, 3]

num.last = function() {
    return this === 0 ? -1 : this[this.length - 1]
}