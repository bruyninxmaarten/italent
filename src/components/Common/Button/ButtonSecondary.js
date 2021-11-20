import React, {Component} from 'react';
import './Button.css';

class ButtonSecondary extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <a href={this.props.target} className="btn btn-secondary hover-underline-animation">{this.props.text}</a>
    }
}

export default ButtonSecondary;
