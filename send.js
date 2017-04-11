'use strict';

const fs = require('fs');
const htmlToText = require('nodemailer-html-to-text').htmlToText;

//exports.sender = function (subject, path, letitgo) {

    // create reusable transporter object using the default SMTP transport
    let transporter = require('nodemailer').createTransport('smtp://smtp.sfr.fr');

    transporter.use('stream', require('nodemailer-dkim').signer({
        domainName: 'inspire-telecom.com',
        keySelector: 'local',
        privateKey: fs.readFileSync('./mail_certif.key')
    }));

    transporter.use('compile', htmlToText());

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"Inspire" <contact@inspire-telecom.com>',
        subject: 'Participez à la création d’un site web révolutionnaire !',
        html: { path: './docs/sf3g54j/index.html' },
        to: ''
    };

    if (false) {
        mailOptions.subject = '[Test] ' + mailOptions.subject;
        mailOptions.to = 'r.charissou@inspire-telecom.com, o.le-floch@inspire-telecom.com, qualite@inspire-telecom.com';
    } else {
        mailOptions.to += 'fise1@telecom-st-etienne.fr, ';
        mailOptions.to += 'fise2@telecom-st-etienne.fr, ';
        mailOptions.to += 'fise3@telecom-st-etienne.fr, ';
        
        //mailOptions.to += 'fisa1@telecom-st-etienne.fr, ';
        //mailOptions.to += 'fisa2@telecom-st-etienne.fr, ';
        //mailOptions.to += 'fisa3@telecom-st-etienne.fr, ';
        
        //mailOptions.to += 'citise1@telecom-st-etienne.fr, ';
        //mailOptions.to += 'citise2@telecom-st-etienne.fr';
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
//}    
