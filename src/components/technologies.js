// technologies.js
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Technologies extends Component {
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
        const technologiesData = this.state.alterraData.technologies;
        if (!technologiesData) {
            return <div>NO DATA</div>
        }
        else {
            const technologiesMarckup = technologiesData.map((item, index) =>
            <div key={index} className="technoly-item-wrapper">                        
                <div className="techlogogy-icon-wrapper">
                    <FontAwesomeIcon icon={item.first} />
                </div>
                    <h3 className="technoly-item-heading">{item.second}</h3>
            
                <p className="technoly-item-description">{item.third}</p>
            </div>
        );
            return (
                <section className="technologies-block">
                    <h2 className="technologies-block-heading">How We Do What We Do</h2>
                    <div className="techno-items-global-wrapper">
                        {technologiesMarckup}
                    </div>
                </section>
            );
        }
    }
    componentDidMount(){
        this.getMyData();
    }
}

export default Technologies;