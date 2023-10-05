const { sql } = require("slonik");

const insertUser = (username, email, password) => sql.unsafe`
    INSERT INTO users (
        email, username, password
    ) VALUES (
        ${email}, ${username}, ${password}
    )
`;

module.exports = {
  insertUser,
};
