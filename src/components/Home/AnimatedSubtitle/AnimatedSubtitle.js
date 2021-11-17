import React, {Component} from 'react';
import './AnimatedSubtitle.css';
import Typical from 'react-typical';
import Aos from 'aos';

class AnimatedSubtitle extends Component {
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
        return <h2 className="heroSubtitle" data-aos="fade-right" data-aos-delay="1000">
            {this.props.staticText}
            <Typical className="colored"
                steps={['Web Development.', 1500, 'UI/UX Design.', 1500, 'Linux.', 1500]}
                loop={Infinity}
                wrapper='span'
            />
        </h2>
    }
}

export default AnimatedSubtitle;
