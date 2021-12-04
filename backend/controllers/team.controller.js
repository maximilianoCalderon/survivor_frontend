const Team = require("../models/team");

exports.findById = (req, res) => {
    Team.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Team with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Team with id " + req.params.id
                });
            }
        } else {
            //Quitamos el password por seguridad
            data.password = "N/A";
            res.send(data);
        }
    });
};

exports.getAll = (req, res) => {
    Team.getAll((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found any team.`
                });
            } else {
                res.status(500).send({
                    message: `Not found any team.`
                });
            }
        } else {
            res.send(data);
        }
    });
};

