import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
// import baseUrl from '../../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'You have subscribed to Jubilee financial newsletter',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    email: "",
};


const NewsletterStyleTwo = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
    const { register, handleSubmit, reset, errors } = useForm();
    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = `/api/newsletter`;

            const payload = { email: contact.email };

            await axios.post(url, payload);

            setContact(INITIAL_STATE);
            alertContent();
            reset();
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div id="newsletter-section" className="newsletter-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="newsletter-image">
                            <img src="/images/bigdata-analytics/newsletter.jpg" alt="newsletter image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="newsletter-content">
                            <h2>Subscribe to our free newsletter</h2>

                            <form
                                className="newsletter-form"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <input name='uri' type='hidden' value='ArlinaDesign' />
                                <input name='loc' type='hidden' value='en_US' />
                                {/* <input type="email" className="input-newsletter" placeholder="Enter your email here" autoComplete='off' /> */}
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Your email address"
                                    className="input-newsletter"
                                    value={contact.email}
                                    onChange={handleChange}
                                    ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                                />


                                <button type="submit" value='submit'>Subscribe</button>

                                <div className='invalid-feedback' style={{ display: 'block' }}>
                                    {errors.email && 'Email is required.'}
                                </div>
                            </form>

                            {/* <div className="col-lg-6 col-md-12">
                                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">

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

                                        

                                        <div className="col-lg-12 col-sm-12">
                                            <button type="submit" className="btn btn-primary">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div> */}

                            <p>Jubilee Financial newsletters delivered straight to your inbox and it's free!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterStyleTwo;  