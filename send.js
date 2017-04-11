'use strict';

// ---------------------
// setup e-mail data
const smtpServer = {
    host: 'smtp.sfr.fr',
    //port = 587
}

let mailOptions = {
    subject: 'Participez à la création d’un site web révolutionnaire !',
    html: { path: './docs/sf3g54j/index.html' },
    from: '"Inspire" <contact@inspire-telecom.com>',
    to: ''
};

if (true) {
    mailOptions.subject = '[Test] ' + mailOptions.subject;
    mailOptions.to = 'perso@inspire-telecom.com';
    //mailOptions.to = 'affaires@inspire-telecom.com, qualite@inspire-telecom.com';
} else {
    //mailOptions.to += 'fise1@telecom-st-etienne.fr, ';
    //mailOptions.to += 'fise2@telecom-st-etienne.fr, ';
    //mailOptions.to += 'fise3@telecom-st-etienne.fr, ';
    
    //mailOptions.to += 'fisa1@telecom-st-etienne.fr, ';
    //mailOptions.to += 'fisa2@telecom-st-etienne.fr, ';
    //mailOptions.to += 'fisa3@telecom-st-etienne.fr, ';
    
    //mailOptions.to += 'citise1@telecom-st-etienne.fr, ';
    //mailOptions.to += 'citise2@telecom-st-etienne.fr';
}
// ---------------------
// ---------------------

// ---------------------
// script
// create reusable transporter object using the default SMTP transport
let transporter = require('nodemailer').createTransport({
    host: smtpServer.host,
    port: smtpServer.port || 587,
    dkim: {
        domainName: 'inspire-telecom.com',
        keySelector: 'local',
        privateKey: require('fs').readFileSync('./mail_certif.key'),
        skipFields: 'message-id:date'
    }
});

transporter.use('compile', require('nodemailer-html-to-text').htmlToText());

// send mail with defined transport object
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
