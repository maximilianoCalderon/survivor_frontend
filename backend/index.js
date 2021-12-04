
const express = require('express')
const app = express()
const port = 3000
const pool = require('./data/config')
const cors = require('cors');
app.use(express.json());

app.use(cors({
    origin: '*'
}));

var nodemailer = require('nodemailer');

app.post('/api/email/confirmation/:id', (req, res) => {
    const User = require("./models/user");

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
            //* Mandamos el correo si encontramos el usuario
            const currentUser = data;
            //** Correo predeterminado para envio automatico */
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
                    Gracias por unirte a <b> Survivor MX </b>. <br>
                    Tu cuenta ha sido creada correctamente.Para acceder a <b> Survivor MX </b> confirma tu cuenta en el siguiente enlace.
                    <br><br>
                    <a href="http://localhost:3000/api/users/confirm/` + currentUser.validation_token + `">Confirmar cuenta</a>
                    <br><br>
                    Si tienes problemas para confirmar tu correo, contactanos al correo soporte@survivormx.com.
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
                    res.send('Message sent');
                }
            });



        }
    });

    
});

app.post('/', (req, res) => {
    res.send(req.body)
});

app.get('/', (req, res) => {
    res.send('App online!')
});

//Users
require("./routes/users.routes.js")(app);
require("./routes/team.routes.js")(app);

app.listen(process.env.PORT || port);
