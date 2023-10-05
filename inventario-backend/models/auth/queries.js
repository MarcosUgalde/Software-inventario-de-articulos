const { sql } = require("slonik");

const insertUser = (username, email, password) => sql.unsafe`
    INSERT INTO users (
        email, username, passwword
    ) VALUES (
        ${email}, ${username}, ${password}
    )
`;

module.exports = {
  insertUser,
};
