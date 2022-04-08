for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        delete obj[key];
    }
}