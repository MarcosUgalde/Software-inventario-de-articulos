const { sql } = require("slonik");

const insertUser = (username, email, password) => sql.unsafe`
    INSERT INTO users (
        email, username, password
    ) VALUES (
        ${email}, ${username}, ${password}
    )
`;

const selectByEmail = (email) => sql.unsafe`
        SELECT email, username, password, id
        FROM users
        WHERE email LIKE ${email}
`;

module.exports = {
  insertUser,
  selectByEmail,
};
