const User = require("../models/user");
require('dotenv').config();

exports.findById = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.id
                });
            }
        } else {
            //Quitamos el password por seguridad
            data.password = "N/A";
            res.send(data);
        }
    });
};

exports.getPasswordRequest = (req, res) => {
    User.getPasswordRequest(req.params.username, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.username}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.username
                });
            }
        } else {
            res.send(data);
        }
    });
};

exports.login = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    User.login(user, (err, data) => {
        if (err)
            res.status(500).send({
                error: true,
                message: err.message || "Some error occurred while login."
            });
        else {
            data.password = 'N/A';
            res.send(data)
        };
    });
};

exports.loginByEmail = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const user = new User({
        password: req.body.password,
        email: req.body.email
    });

    User.loginByEmail(user, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while login."
            });
        else {
            data.password = 'N/A';
            res.send(data)
        };
    });
};

exports.register = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    const crypto = require('crypto');
    const token = crypto.randomBytes(48).toString('hex');


    let user = new User({
        username: req.body.username,
        name : req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        birthday: req.body.birthday,
        validation_token: token
    });

    User.register(user, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        else res.send("User created!");
    });
};

exports.confirm = (req, res) => {
   User.confirm(req.params.token, (err, data) => {
       if (err) {
           if (err.kind === "not_found") {
               res.status(404).send({
                   message: `Not found User with token ${req.params.token}.`
               });
           } else {
               res.status(500).send({
                   message: "Error retrieving User with token " + req.params.token
               });
           }
       } else {
           //res.send("User confirmed");
           //* Importante redirigir a la pagina principal del FRONTEND
           res.redirect('http://google.com')
       }
   });
};

exports.passwordRecovery = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    User.findByEmail(req.body.email, (err,data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with email ${req.body.email}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with email " + req.body.email
                });
            }
        } else {
            //* Si encontramos el correo
            //** Correo predeterminado para envio automatico */
            const nodemailer = require('nodemailer')
            let currentUser = data;
            const transport = nodemailer.createTransport({
                service: "Hotmail",
                auth: {
                    user: "max_calderon2@hotmail.com",
                    pass: "gappy@2112"
                }
            });

            //* Importante utilizar la URL final del API
            var mailOptions = {
                from: 'max_calderon2@hotmail.com',
                to: currentUser.email,
                subject: `Confirmacion Survivor MX`,
                html: `Hola ` + currentUser.name + `,<br><br>
                    Recibimos tu solicitud de cambio de password. <br>
                    Para cambiar tu password, favor de dar click en el siguiente enlace.
                    <br><br>
                    <a href="`+process.env.APP_URL
                    +`/Password/` + currentUser.username + `">Confirmar cuenta</a>
                    <br><br>
                    Si tienes problemas para cambiar tu password, contactanos al correo soporte@survivormx.com.
                    <br>
                    Saludos,<br>
                    El equipo de <b> Survivor MX </b>`
            };

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    transport.close();
                    res.status(500).send({
                        message: 'Error while sending mail: ' + error
                    });
                } else {
                    transport.close();
                    User.passwordLost(currentUser, (err, data) => {
                        if (err) {
                            res.status(500).send({
                                message: "Error updating user " + currentUser.username
                            });
                        } else {
                            res.send('Message sent');
                        }
                    });
                }
            });
        }
    });
};

exports.passwordChange = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    let user = new User({
        username: req.body.username,
        password: req.body.password
    });


    User.changePassword(user, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User"
                });
            }
        } else {
            res.send("Password changed");
        }
    });
};