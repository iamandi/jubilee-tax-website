import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'react-feather';

import Navbar from "@/components/_App/NavbarStyleFour";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';

import sortAndSetCategory from "@/utils/SortAndSetCategeory";
import ShortenText from '@/utils/ShortenText';
import ToText from '@/utils/ToText';

const MEDIUM_BLOG = 'https://medium.com/@andypuneri'
const MEDIUM_FEED_BLOG = 'https://medium.com/feed/@andypuneri'

const Blog2 = () => {
    const [itemRows, setItemRows] = useState([]);
    const [loading, setLoading] = useState(false);

    const mediumURL = `https://api.rss2json.com/v1/api.json?rss_url=${MEDIUM_FEED_BLOG}`;

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
                // console.log('tagArticle', tagArticle);

                tagArticle.forEach((item, i) => {
                    const row = Math.floor(i / 3);
                    if (!tagArticleWithRow[row]) tagArticleWithRow[row] = [];
                    tagArticleWithRow[row].push(item);
                });

                // console.log('tagArticleWithRow', tagArticleWithRow);

                setItemRows(tagArticle);
                setLoading(true);
            });
    }, []);

    return (
        <>
            <Navbar />

            <PageBanner pageTitle1="Jubilee Financial" pageTitle2="Weekly Tax Tips" pageSubTitle='STAY INFORMED' />

            <div className="blog-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="row justify-content-center">
                                <div className="container-fluid">
                                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
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
                                                <div className="col mb-4" key={pubDate}>
                                                    <div className="card h-100">
                                                        <img src={thumbnail} className="card-img-top" />
                                                        <div className='single-blog-post'>
                                                            <div className='blog-image'>
                                                                <div className="date">
                                                                    <Calendar /> {pubDate}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="blog-post-content">
                                                                <h3>
                                                                    <a href={link} target="_blank" rel="noopener noreferrer">{`${ShortenText(ToText(title), 0, 120)}`}</a>
                                                                </h3>

                                                                <span><User /> <a href={profileLink} target="_blank" rel="noopener noreferrer">{author}</a></span>

                                                                <p>{`${ShortenText(ToText(content), 0, 120)}...`}</p>

                                                            </div>
                                                            <a className="read-more-btn" href={link} target="_blank" rel="noopener noreferrer">
                                                                Read More <ArrowRight />
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
                    </div>
                    <div className="others-option">
                        <a className="btn btn-primary" href={MEDIUM_BLOG} target="_blank" rel="noopener noreferrer">Read more stories..</a>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default Blog2;