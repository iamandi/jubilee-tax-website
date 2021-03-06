import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = {
    auth: {
        api_key: process.env.SENDGRID_KEY
    }
}

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
    const { name, email, number, subject, text } = req.body;
    const data = {
        to: process.env.SENDGRID_EMAIL_TO,
        from: process.env.SENDGRID_EMAIL_FROM,
        subject: 'Jubilee website contact form lead',
        text: text,
        html: `
            <b>From:</b> ${name} <br /> 
            <b>Email:</b> ${email} <br />
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Message:</b> ${text} 
        `
    };
    // console.log('/api/contact - data', data);

    try {
        const response = await mailer.sendMail(data);
        console.log({ response })
        res.status(200).send("Email send successfully")
    } catch (error) {
        console.error(error);
        res.status(500).send("Error proccessing charge");
    }
}