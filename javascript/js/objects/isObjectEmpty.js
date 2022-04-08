function isObjectEmpty(obj) {
    if (obj !== null && typeof obj === 'object') //not sure if need this
        return Object.keys(obj).length === 0 && obj.constructor === Object
}