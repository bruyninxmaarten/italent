import React, {Component} from 'react';
import './Hero.css';
import Title from '../../Common/Title/Title';
import AnimatedSubtitle from '../AnimatedSubtitle/AnimatedSubtitle';


class Hero extends Component {
    render() {
        return <div className="hero">
                    <Title line1='Student AI & Robitcs' line2='at PXL Hasselt'/>
                    <AnimatedSubtitle staticText='With a passion for ' />
        </div>
    }
}

export default Hero;
