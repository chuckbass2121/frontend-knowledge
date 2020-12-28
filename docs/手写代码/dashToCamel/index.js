function dashToCamel(str) {
    return str.replace(/-([a-z])/g, function (match, p1) {
        return p1.toUpperCase();
    });
}

console.log(dashToCamel('react-creat-app')); //reactCreateApp

function camelToDash(str) {
    return str.replace(/[A-Z]/g, function (match) {
        return '-' + match.toLowerCase();
    });
}
console.log(camelToDash('reactCreateApp')); //react-creat-app