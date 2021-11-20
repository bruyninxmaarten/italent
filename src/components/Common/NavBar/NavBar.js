import React, {Component} from 'react';
import ButtonSecondary from '../Button/ButtonSecondary';
import './NavBar.css';


class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <div>Maarten Bruyninx</div>
                <div className="items">
                    <a className="hover-underline-animation" href="/italent">Home</a>
                    <a className="hover-underline-animation" href="/italent/#about">About</a>
                    <a className="hover-underline-animation" href="/italent/#skills">Skills</a>
                    <a className="hover-underline-animation" href="/italent/#contact">Contact</a>
                    <ButtonSecondary target="/blog" text="Italent Blog"/>
                </div>
            </div>
        )
    }
}

export default Navbar;
