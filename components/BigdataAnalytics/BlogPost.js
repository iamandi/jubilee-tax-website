import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'react-feather';

import sortAndSetCategory from "@/utils/SortAndSetCategeory";
import ShortenText from '@/utils/ShortenText';
import ToText from '@/utils/ToText';

const MEDIUM_BLOG = 'https://medium.com/@bendaviesromano'
const MEDIUM_FEED_BLOG = 'https://medium.com/feed/@bendaviesromano'

const BlogPost = () => {
    const [itemRows, setItemRows] = useState([]);
    const [loading, setLoading] = useState(false);

    const mediumURL =
        `https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_FEED_BLOG}&api_key=ausdt5ego7fpi3maahigi0x1phd7gzrz8d6omaqm&count=3`;

    useEffect(() => {
        fetch(mediumURL)
            .then((res) => res.json())
            .then((data) => {
                const {
                    feed: { image, link },
                    items,
                } = data || {};

                const posts = items.filter((item) => item.categories.length > 0);

                const tagArrays = posts.map((item) => item.categories);

                const allTags = tagArrays.flat();

                const sortedTagsArray = sortAndSetCategory(allTags) || [];

                // console.log(sortedTagsArray);
                const tagArticle = [];
                let removedBlogs = posts;
                for (let i = 0; i < sortedTagsArray.length; i += 1) {
                    const blogsWithTag = removedBlogs.filter((blog) =>
                        blog.categories.includes(sortedTagsArray[i])
                    ); // filter

                    removedBlogs = removedBlogs.filter(
                        (blog) => blogsWithTag.indexOf(blog) === -1
                    ); // exclude

                    if (blogsWithTag.length > 0) {
                        blogsWithTag.forEach((item) => {
                            item.tag = sortedTagsArray[i];
                            tagArticle.push(item);
                        });
                    }
                }

                const filteredTagArrays = tagArticle.map((item) => item.tag);
                const filteredSortedTagsArray =
                    sortAndSetCategory(filteredTagArrays) || [];

                tagArticle.forEach((item) => {
                    item.tagNo = filteredSortedTagsArray.indexOf(item.tag) + 1;
                    item.avatar = image; // push avatar inside the json
                    item.profileLink = link; // push profile link inside the JSON
                });

                const tagArticleWithRow = [];

                console.log('tagArticle', tagArticle);

                tagArticle.forEach((item, i) => {
                    const row = Math.floor(i / 3);
                    if (!tagArticleWithRow[row]) tagArticleWithRow[row] = [];
                    tagArticleWithRow[row].push(item);
                });

                console.log('tagArticleWithRow', tagArticleWithRow)

                setItemRows(tagArticle);
                setLoading(true);
            });
    }, []);

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
                            <div class="container-fluid">
                                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                                    {
                                        loading && itemRows.length > 0 &&
                                        itemRows.map(({
                                            pubDate,
                                            thumbnail,
                                            tagNo,
                                            tag,
                                            profileLink,
                                            avatar,
                                            author,
                                            link,
                                            title,
                                            content
                                        }) => (
                                            <div class="col mb-4">
                                                <div class="card h-100">
                                                    <img src={thumbnail} class="card-img-top" />
                                                    <div className='single-blog-post'>
                                                        <div className='blog-image'>
                                                            <div className="date">
                                                                <Calendar /> {pubDate}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <div className="blog-post-content">
                                                            <h3>
                                                                <a href={link} target="_blank" rel="noopener noreferrer">{`${ShortenText(ToText(title), 0, 120)}`}</a>
                                                            </h3>

                                                            <span><User /> <a href={profileLink} target="_blank" rel="noopener noreferrer">{author}</a></span>

                                                            <p>{`${ShortenText(ToText(content), 0, 120)}...`}</p>

                                                        </div>
                                                        <a className="read-more-btn" href={link} target="_blank" rel="noopener noreferrer">
                                                            Read Story <ArrowRight />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
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

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </div>
    )
}

export default BlogPost;  