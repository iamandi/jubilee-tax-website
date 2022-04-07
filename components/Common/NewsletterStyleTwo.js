import React from 'react';

const NewsletterStyleTwo = () => {
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
                                method='post'
                                action='https://feedburner.google.com/fb/a/mailverify?uri=PetaKode'
                                // onSubmit='window.open(&apos;https://feedburner.google.com/fb/a/mailverify?uri=PetaKode&apos;, &apos;popupwindow&apos;, &apos;scrollbars=yes,width=550,height=520&apos;);return true'
                                onSubmit={() => console.log('Submitted')}
                                target='popupwindow'
                            >
                                <input name='uri' type='hidden' value='ArlinaDesign' />
                                <input name='loc' type='hidden' value='en_US' />
                                <input type="email" className="input-newsletter" placeholder="Enter your email here" autoComplete='off' />
                                <button type="submit" value='submit'>Subscribe</button>
                            </form>

                            {/* <form action='https://feedburner.google.com/fb/a/mailverify?uri=PetaKode' class='subscribe-form' method='post' onSubmit='window.open (&apos;https://feedburner.google.com/fb/a/mailverify?uri=PetaKode&apos;, &apos;popupwindow&apos;, &apos;scrollbars=yes,width=550,height=520&apos;);return true' target='popupwindow'>
                                <input name='uri' type='hidden' value='ArlinaDesign' /><input name='loc' type='hidden' value='en_US' /><input autoComplete='off' class='subscribe-css-email-field' name='email' placeholder='Enter your Email' /><input class='subscribe-css-email-button' title='' type='submit' value='submit' /></form> */}

                            <p>Jubilee Financial newsletters delivered straight to your inbox and it's free!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsletterStyleTwo;  