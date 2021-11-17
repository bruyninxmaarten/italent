import React, {Component} from 'react';
import './Button.css';

class ButtonPrimary extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <a href={this.props.target} className="btn btn-primary">{this.props.text}</a>
    }
}

export default ButtonPrimary;
