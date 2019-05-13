// meters.js
import React, { Component } from 'react';

class Meters extends Component {
    constructor(props){
        super(props);
        this.state = {
            val1: null,
            val2: null,
            val3: null
        }
    } 
    setValues(){
        setTimeout(() => {
          this.setState({
            val1: 75,
            val2: 99,
            val3: 85
          })
        }, 3000)
    }  
       
    /*setTimeout(function() {
        this.setState({ val1: 75});
    }.bind(this), 1000);*/
    render() {
        return (
            <section className="alterra-meters-block">
                <div className="ultrawrapper">
                    <h2 className="meters-heading">Our Skills, Talents & Expertise</h2>
                    <div className="meters-wrapper">
                        <label htmlFor="trend">Trend folowing:</label>
                        <progress title={this.state.val1+'%'} id="trend" max="100" value={this.state.val1}> {this.state.val1} </progress>
                        <label htmlFor="code-quality">Code quality:</label>
                        <progress title={this.state.val2+'%'} id="code-quality" max="100" value={this.state.val2}> {this.state.val2} </progress>
                        <label htmlFor="predictability">Predictability:</label>
                        <progress title={this.state.val3+'%'} id="predictability" max="100" value={this.state.val3}> {this.state.val3} </progress>
                    </div>
                </div>
            </section>
        );
    }
    componentDidMount(){
        this.setValues();
    }
}

export default Meters;