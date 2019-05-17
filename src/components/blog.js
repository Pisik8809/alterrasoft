// blog.js
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        const ultra = this.state.alterraData.ultratest;
        if (!ultra) {
            return <div>NO DATA</div>
        }
        else {
            const ultramarckup = ultra.map((item, index) =>
            <div key={index} className="blog-block-item">
                <a href="http://localhost:3000/" className="blog-block-link_with_img">
                    <img src={item.first} alt="conf-cart"/>
                    <h4 className="blog-block-item_heading">{item.second}</h4>
                </a>
                <a href="http://localhost:3000/" className="blog-block-item_category-link">
                    <p className="blog-block-item-category"><FontAwesomeIcon icon="tag" />IT articles</p>
                </a>
                <p className="blog-block-item-description">{item.third}</p>
            </div>
        );
            return (
                <section className="blog-block" id="blog">
                    <h2 className="blog-block-heading">We Like To Write About Innovative Ideas</h2>
                    {ultramarckup}
                </section>
            );
        }  
    }
    componentDidMount(){
        this.getMyData();
    }
}

export default Blog;