// meters.js
import React, { Component } from 'react';

class Meters extends Component {
    constructor(props){
        super(props);
        this.state = {
            /*val1: null,
            val2: null,
            val3: null*/
            alterraData: {}
        }
    } 
    /*setValues(){
        setTimeout(() => {
          this.setState({
            val1: 75,
            val2: 99,
            val3: 85
          })
        }, 3000)
    } */

    getMyData(){
        fetch('http://localhost:3000/alterra-data.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ alterraData: data });
                console.log(this.state.alterraData);
            });
    }
       
    render() {
        const metersData = this.state.alterraData.meters;
        if (!metersData) {
            return <div>NO DATA</div>
        }
        else {
            const metersMarckup = metersData.map((item, index) =>
            <div key={index}>
                <label htmlFor={item.forId}>{item.heading}:</label>
                <progress title={item.title} id={item.forId} max="100" value={item.value}> {item.value} </progress>
            </div>
            );
            return (
                <section className="alterra-meters-block">
                    <div className="ultrawrapper">
                        <h2 className="meters-heading">Our Skills, Talents & Expertise</h2>
                        <div className="meters-wrapper">
                            {metersMarckup}
                        </div>
                    </div>
                </section>
            );
        }
    }
    componentDidMount(){
        /*this.setValues();*/
        this.getMyData();
    }
}

export default Meters;