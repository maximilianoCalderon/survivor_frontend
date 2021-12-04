


module.exports = app => {
    const user = require("../controllers/user.controller");

    var router = require("express").Router();

    // Find by id
    router.get("/:id", user.findById);
    // Login
    router.post("/login", user.login);
    // Login by Email
    router.post("/login/email", user.loginByEmail);
    // register a new user
    router.post("/register", user.register);
    //confirm
    router.get("/confirm/:token", user.confirm);
    //password recovery
    router.post("/password/recovery", user.passwordRecovery);
    //password request
    router.get("/password/request/:username", user.getPasswordRequest);
    //password request
    router.post("/password/change", user.passwordChange);


    app.use('/api/users', router);
};