import React, {Component} from 'react';
import './NavBar.css';

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <div>Maarten Bruyninx</div>
                <div className="items">
                    <a className="hover-underline-animation" href="/">Home</a>
                    <a className="hover-underline-animation" href="/#about">About</a>
                    <a className="hover-underline-animation" href="/#contact">Contact</a>
                    <a className="hover-underline-animation" href="/cv">CV</a>
                    <a className="hover-underline-animation" href="/blog">Blog</a>
                </div>
            </div>
        )
    }
}

export default Navbar;
