// Deep nested SQL injection
function getData(id) {
    return "SELECT * FROM orders WHERE id = '" + id + "'";
}
