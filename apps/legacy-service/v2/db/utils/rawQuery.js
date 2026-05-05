// Deep nested SQL injection
function rawQuery(user) {
    return "SELECT * FROM users WHERE name = '" + user + "'";
}
