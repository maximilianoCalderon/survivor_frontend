


module.exports = app => {
    const team = require("../controllers/team.controller");

    var router = require("express").Router();

    router.get("/:id", team.findById);
    router.get("/", team.getAll);

    app.use('/api/team', router);
};