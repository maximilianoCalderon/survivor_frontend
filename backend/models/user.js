const sql = require('../data/config')

// constructor
const User = function (user) {
    this.username = user.username;
    this.name = user.name;
    this.lastname = user.lastname;
    this.email = user.email;
    this.password = user.password;
    this.validation_token = user.validation_token;
    this.birthday = user.birthday;
    this.password_lost = user.password_lost;
};

User.register = (newUser, result) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("new User: ", newUser);
        result(null, newUser);
    });
};

User.findById = (id, result) => {
    sql.query(`SELECT * FROM users WHERE username = '${id}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        // not found Tutorial with the id
        result({
            kind: "not_found"
        }, null);
    });
};

User.login = (user, result) => {
    sql.query(`SELECT * FROM users WHERE username = ? AND password = ?`, 
        [
            user.username,
            user.password
        ], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        // not found Tutorial with the id
        result({
            kind: "not_found"
        }, null);
    });
};

User.getToken = () => {
    var token = "";
    require('crypto').randomBytes(48, function (err, buffer) {
        token = buffer.toString('hex');
    });
    return token;
}

User.loginByEmail = (user, result) => {
    sql.query(`SELECT * FROM users WHERE email = ? AND password = ?`,
        [
            user.email,
            user.password
        ], (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }

            if (res.length) {
                result(null, res[0]);
                return;
            }

            // not found Tutorial with the id
            result({
                kind: "not_found"
            }, null);
        });
};

User.confirm = (token, result) => {
    sql.query(
        "UPDATE users SET is_confirmed = 1 WHERE validation_token = ?",
        [token],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({
                    kind: "not_found"
                }, null);
                return;
            }

            result(null, token);
        }
    );
};

User.findByEmail = (email, result) => {
    sql.query(`SELECT email, name, lastname, username FROM users WHERE email = '${email}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        // not found Tutorial with the id
        result({
            kind: "not_found"
        }, null);
    });
};

User.getPasswordRequest = (username, result) => {
    sql.query(`SELECT password_lost FROM users WHERE username = '${username}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        // not found Tutorial with the id
        result({
            kind: "not_found"
        }, null);
    });
};

User.passwordLost = (user, result) => {
    sql.query(
        "UPDATE users SET password_lost = ? WHERE username = ?",
        [1, user.username],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({
                    kind: "not_found"
                }, null);
                return;
            }

            result(null, true);
        }
    );
};

User.changePassword = (user, result) => {
    sql.query(
        "UPDATE users SET password = ?, password_lost = 0 WHERE username = ?",
        [user.password, user.username],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                result({
                    kind: "not_found"
                }, null);
                return;
            }

            result(null, res.affectedRows);
        }
    );
};

User.logPassword = (log, result) => {
    sql.query("INSERT INTO user_password SET ?", log, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        result(null, log);
    });
};

module.exports = User;
