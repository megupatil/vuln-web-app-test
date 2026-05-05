exports.getUser = (name) => {
    const query = "SELECT * FROM users WHERE name = '" + name + "'";
    return query; // Simulating DB call
};
