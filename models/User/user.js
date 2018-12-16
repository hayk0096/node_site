module.exports = function (db) {
    return {
        createUser(firstname, lastname, email, birthdate, gender, password, cb){
            db.query("INSERT INTO users SET ?",
                {
                    firstname,
                    lastname,
                    email,
                    gender,
                    birthdate,
                    password
                },
                cb);
        },
        getUser(email, password, cb){
            db.query("SELECT * FROM users WHERE email = ? AND password = ?",
                [
                    email,
                    password
                ], cb);
        },
        getUserById(id, cb){
            db.query("SELECT * FROM users WHERE id = ? ", [id], cb );
        },
        findByEmail(email, cb){
            db.query("SELECT * FROM users WHERE email = ?", [email], cb );
        }
    }
};


