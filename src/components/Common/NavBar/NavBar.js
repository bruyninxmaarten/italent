import React, {Component} from 'react';
import './NavBar.css';

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <div>Maarten Bruyninx</div>
                <div className="items">
                    <a className="hover-underline-animation" href="/italent">Home</a>
                    <a className="hover-underline-animation" href="/italent/#about">About</a>
                    <a className="hover-underline-animation" href="/italent/#contact">Contact</a>
                    <a className="hover-underline-animation" href="/cv">CV</a>
                    <a className="hover-underline-animation" href="/blog">Blog</a>
                </div>
            </div>
        )
    }
}

export default Navbar;
