import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ReCAPTCHA from 'react-google-recaptcha'
const MySwal = withReactContent(Swal)

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);

    const recaptchaRef = React.createRef();

    const { register, handleSubmit, reset, errors } = useForm();
    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        // console.log(contact);
    }

    const onReCAPTCHAChange = (captchaCode) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if (!captchaCode) {
            return;
        }
        // Else reCAPTCHA was executed successfully so proceed with the 
        // alert
        alert(`Hey, ${email}`);
        // Reset the reCAPTCHA so that it can be executed again if user 
        // submits another email.
        recaptchaRef.current.reset();
    }

    const onSubmit = async e => {
        // e.preventDefault();
        // Execute the reCAPTCHA when the form is submitted
        console.log('recaptchaRef', recaptchaRef);
        // recaptchaRef.current.execute();

        try {
            const url = `/api/contact`;

            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };

            await axios.post(url, payload);

            setContact(INITIAL_STATE);
            alertContent();
            reset();
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="contact-area pb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <img src="/images/bigdata-analytics/contact_img.jpg" alt="image" />
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                size="invisible"
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                onChange={onReCAPTCHAChange}
                            />
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            className="form-control"
                                            value={contact.name}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{ display: 'block' }}>
                                            {errors.name && 'Name is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Your email address"
                                            className="form-control"
                                            value={contact.email}
                                            onChange={handleChange}
                                            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                        />
                                        <div className='invalid-feedback' style={{ display: 'block' }}>
                                            {errors.email && 'Email is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="number"
                                            placeholder="Your phone number"
                                            className="form-control"
                                            value={contact.number}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{ display: 'block' }}>
                                            {errors.number && 'Number is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Your Subject"
                                            className="form-control"
                                            value={contact.subject}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{ display: 'block' }}>
                                            {errors.subject && 'Subject is required.'}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="text"
                                            cols="30"
                                            rows="5"
                                            placeholder="Write your message..."
                                            className="form-control"
                                            value={contact.text}
                                            onChange={handleChange}
                                            ref={register({ required: true })}
                                        />
                                        <div className='invalid-feedback' style={{ display: 'block' }}>
                                            {errors.text && 'Message is required.'}
                                        </div>
                                    </div>

                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Protected by Google reCaptcha anti-spam policy.
                                        </label>
                                    </div>

                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            By clicking this button, you agree to our Terms and Privacy policy.
                                        </label>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-sm-12">
                                    <button type="submit" className="btn btn-primary">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;  