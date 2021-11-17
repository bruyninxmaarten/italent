import React, {Component} from 'react';
import Aos from 'aos';
import './Home.css';
import Hero from '../../components/Home/Hero/Hero';
import Title from '../../components/Common/Title/Title';
import ButtonPrimary from '../../components/Common/Button/ButtonPrimary';
import aboutSvg from '../../images/AI.svg';
import contactSvg from '../../images/contact2.svg';
import Footer from '../../components/Common/Footer/Footer';

class Home extends Component {
    componentDidMount() {
        Aos.init({
            duration : 1000,
            once: true
        });
    }

    render() {
        return (
            <div className="home">
                <Hero/>
                <div className="blog" id="about">
                    <h2>My I-Talent portfolio</h2>
                    <p>Want to know more about my degree and I-Talent? <a href="/blog" className='hover-underline-animation'> Click here to see my blog. </a></p>
                </div>
                <div className="about">
                    <div className="left">
                        <Title line1="About me"/>
                        <h2 data-aos="fade-right" data-aos-delay="500">
                            <span 
                                className="accent">maarten@arch:~$  
                            </span>
                            <span className="reveal hover-underline-animation">whoami</span>
                            <span className='whoami'> linux command to print current user</span> 
                        </h2>
                        <div className="bulletPoint" data-aos="fade-right" data-aos-delay="600">
                            23 years old.
                        </div> <br/>
                        <div className="bulletPoint" data-aos="fade-right" data-aos-delay="700">
                            Hasselt, Belgium.
                        </div> <br/>
                        <div className="bulletPoint" data-aos="fade-right" data-aos-delay="800">
                            2 years at PXL Hasselt, started in Jan 2020.
                        </div> <br/>
                        <div className="bulletPoint" data-aos="fade-right" data-aos-delay="900">
                            On track to graduate in Jul 2022, after 2.5 years.
                        </div><br/><br/>
                        <div data-aos="fade-up" ata-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-duration="1000">
                            <ButtonPrimary target="/cv" text="Click here to view my CV"/>
                        </div>
                    </div>
                    <div className="right" data-aos="fade-left" data-aos-delay="500">
                        <img src={aboutSvg}/>
                    </div>

                </div><br/>
                <div className="contact" id="contact">
                    <div className="left" data-aos="fade-right" data-aos-delay="500">
                        <img src={contactSvg}/>
                    </div>
                    <div className="right" data-aos="fade-left" data-aos-delay="500">
                        <Title line1="Contact me"/>
                        <h2 data-aos="fade-left" data-aos-delay="650">
                            <span 
                                className="white">Let's work togheter 
                            </span>
                        </h2><br/>
                        <span data-aos="fade-left" data-aos-delay="800">LinkedIn</span><br/>
                        <div data-aos="fade-left" data-aos-delay="800">
                            <a className="hover-underline-animation" href='https://www.linkedin.com/in/bruyninxmaarten/'>bruyninxmaarten</a>
                        </div> <br/>
                        <span data-aos="fade-left" data-aos-delay="900">Email</span><br/>
                        <div data-aos="fade-left" data-aos-delay="900">
                            maarten.bruyninx@gmail.com
                        </div> <br/>
                    </div>
                </div>
                <Footer /> 

            </div>
        )
    }
}

export default Home;
