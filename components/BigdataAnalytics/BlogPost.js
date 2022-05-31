import React from 'react';
import Link from 'next/link';

const BlogPost = () => {
    return (
        <div className="blog-area pt-80 pb-50">
            <div className="container">
                <div className="section-title">
                    <h2>Our Recent Story</h2>
                    <div className="bar"></div>
                    <p>Stay informed with our latest blogs and stories.</p>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="row justify-content-center">
                            <div className="container-fluid">
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="others-option" style={{ display: 'flex', justifyContent: 'center' }}>
                        <Link href="/blog-2">
                            <a className="btn btn-primary">Read more stories..</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPost;  