// blog.js
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Blog extends Component {
    render() {
        return (
            <section className="blog-block">
                <h2 className="blog-block-heading">We Like To Write About Innovative Ideas</h2>
                <div className="blog-block-item">
                    <a href="http://localhost:3000/" className="blog-block-link_with_img">
                        <img src="http://localhost:3000/conf-1-5.jpg" alt="conf-cart"/>
                        <h4 className="blog-block-item_heading">KharkivCss#4-2019</h4>
                    </a>
                    <a href="http://localhost:3000/" className="blog-block-item_category-link">
                        <p className="blog-block-item-category"><FontAwesomeIcon icon="tag" />IT articles</p>
                    </a>
                    <p className="blog-block-item-description">Kharkiv css #4 (2019)...</p>
                </div>
                <div className="blog-block-item">
                    <a href="http://localhost:3000/" className="blog-block-link_with_img">
                        <img src="http://localhost:3000/schema1-5.jpg" alt="schema-img"/>
                        <h4 className="blog-block-item_heading">Stages of Software Development Cycle</h4>
                    </a>
                    <a href="http://localhost:3000/" className="blog-block-item_category-link">
                        <p className="blog-block-item-category"><FontAwesomeIcon icon="tag" />IT articles</p>
                    </a>
                    <p className="blog-block-item-description">We introduce stages of development...</p>
                </div>
                <div className="blog-block-item">
                    <a href="http://localhost:3000/" className="blog-block-link_with_img">
                        <img src="http://localhost:3000/prices1-6.jpg" alt="prices-img"/>
                        <h4 className="blog-block-item_heading">IT  Software Development: How to Choose Provider</h4>
                    </a>
                    <a href="http://localhost:3000/" className="blog-block-item_category-link">
                        <p className="blog-block-item-category"><FontAwesomeIcon icon="tag" />IT articles</p>
                    </a>
                    <p className="blog-block-item-description">How to choose software developer for you project?...</p>
                </div>
                <div className="blog-block-item">
                    <a href="http://localhost:3000/" className="blog-block-link_with_img">
                        <img src="http://localhost:3000/b2b1-5.jpg" alt="b2b-scheme-img"/>
                        <h4 className="blog-block-item_heading">B2B Application Development</h4>
                    </a>
                    <a href="http://localhost:3000/" className="blog-block-item_category-link">
                        <p className="blog-block-item-category"><FontAwesomeIcon icon="tag" />IT articles</p>
                    </a>
                    <p className="blog-block-item-description">What is B2B model? Who need B2B app? 
                    B2B iOS application structure...</p>
                </div>
                <div className="blog-block-item">
                    <a href="http://localhost:3000/" className="blog-block-link_with_img">
                        <img src="http://localhost:3000/UaIT1-4.jpg" alt="UaIT-img"/>
                        <h4 className="blog-block-item_heading">Ukrainian software developers: reasons to hire</h4>
                    </a>
                    <a href="http://localhost:3000/" className="blog-block-item_category-link">
                        <p className="blog-block-item-category"><FontAwesomeIcon icon="tag" />IT articles</p>
                    </a>
                    <p className="blog-block-item-description">What main advantages of hiring Ukrainian IT companies?...</p>
                </div>
            </section>
        );
    }
}

export default Blog;