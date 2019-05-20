// about.js
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class About extends Component {
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
        const aboutData = this.state.alterraData.about;
        if (!aboutData) {
            return <div>NO DATA</div>
        }
        else {
            const aboutMarckup = aboutData.map((item, index) =>
            <div key={index} className="about-section-item">
                <FontAwesomeIcon icon={item.first} />
                <h4 className="about-section-item__heading">{item.second}</h4>
                <p className="about-section-item__desc">
                    {item.third}
                </p>
            </div>
            );
            return (
                <section className="about-block" id="about">
                    <h2 className={"about-heading"}>About Us & What We Do</h2>
                    <p className={"about-description"}>At AlterraSoft we specialize in outsourcing IT services.</p>
                    <div className={"about-section-grid"}>
                        {aboutMarckup}
                    </div>
                </section>
            );
        }
    }
    componentDidMount(){
        this.getMyData();
    }
}

export default About;