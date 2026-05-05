// SQL Injection (deep nested but NOT ignored path)
function getUser(name) {
    return "SELECT * FROM users WHERE name = '" + name + "'";
}
