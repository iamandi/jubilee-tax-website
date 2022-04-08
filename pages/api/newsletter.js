import nodemailer from 'nodemailer';
import sgTransport from 'nodemailer-sendgrid-transport';

const transporter = {
    auth: {
        api_key: process.env.SENDGRID_KEY
    }
}

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
    const { email } = req.body;

    const data = {
        to: process.env.SENDGRID_EMAIL_TO,
        from: process.env.SENDGRID_EMAIL_FROM,
        subject: 'Jubilee financial newsletter subscription',
        html: `
            <b>Please add following email to the subscription list: </b> <br />
            <b>Email:</b> ${email} <br />
        `
    };

    try {
        const response = await mailer.sendMail(data);
        console.log({ response });
        res.status(200).send("Email send successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error proccessing charge");
    }
}