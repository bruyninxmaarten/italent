import React, {Component} from 'react';
import './Title.css';
import Aos from 'aos';

class Title extends Component {
    componentDidMount() {
        Aos.init({
            duration : 2000,
            once: true
        });
    }
    constructor(props) {
        super(props);
    }
    render() {
        return <h1 className="title" data-aos="fade-down" data-aos-delay="500"> 
            {this.props.line1}<br/>{this.props.line2}
        </h1>
    }
}

export default Title;
