const sql = require('../data/config')

// constructor
const Team = function (team) {
    this.id = user.id;
    this.name = user.name;
    this.stadium_name = user.stadium_name;
    this.location = user.location;
    this.league_id = user.league_id;
    this.created_at = user.created_at;
    this.created_by = user.created_by;
    this.img_url = user.img_url;
};

Team.findById = (id, result) => {
    sql.query(`SELECT * FROM team WHERE id = ${id}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        result({
            kind: "not_found"
        }, null);
    });
};

Team.getAll = (result) => {
    let query = "SELECT * FROM team";

    sql.query(query, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }

        result(null, res);
    });
};


module.exports = Team;
