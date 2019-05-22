// blog.js
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            alterraData: {}
        }
    }
    
    getMyData(){
        fetch('http://localhost:3000/alterra-data.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ alterraData: data });
                console.log(this.state.alterraData);
            });
    }

    render() {
        const blogData = this.state.alterraData.blog;
        if (!blogData) {
            return <div>NO DATA</div>
        }
        else {
            const blogMarckup = blogData.map((item, index) =>
            <div key={index} className="blog-block-item">
                <Link to={item.href} className="blog-block-link_with_img">
                    <img src={item.first} alt="conf-cart"/>
                    <h4 className="blog-block-item_heading">{item.second}</h4>
                </Link>
                <a href="http://localhost:3000/" className="blog-block-item_category-link">
                    <p className="blog-block-item-category"><FontAwesomeIcon icon="tag" />IT articles</p>
                </a>
                <p className="blog-block-item-description">{item.third}</p>
            </div>
        );
            return (
                <section className="blog-block" id="blog">
                    <h2 className="blog-block-heading">We Like To Write About Innovative Ideas</h2>
                    {blogMarckup}
                </section>
            );
        }  
    }
    componentDidMount(){
        this.getMyData();
    }
}

export default Blog;