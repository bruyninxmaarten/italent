import React, {Component} from 'react';
import Aos from 'aos';
import './Home.css';
import Hero from '../../components/Home/Hero/Hero';
import Title from '../../components/Common/Title/Title';
import ButtonPrimary from '../../components/Common/Button/ButtonPrimary';
import aboutSvg from '../../images/about.svg';
import contactSvg from '../../images/contact2.svg';
import skillsSvg from '../../images/skills.svg';
import Footer from '../../components/Common/Footer/Footer';
import ButtonSecondary from '../../components/Common/Button/ButtonSecondary';

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
                <div className="blog" id="about" >
                    <h2>Mijn I-Talent portfolio</h2>
                    <p>Wil je meer weten over wie ik ben en wat ik doe? <a href="/blog" className='hover-underline-animation'> Klik hier voor mijn ITalent. </a></p>
                </div>
                <div className="about">
                    <div className="text-side">
                        <Title line1="About me"/>
                        <h2 data-aos="fade-right" data-aos-delay="500">
                            <span 
                                className="accent">maarten@arch:~$  
                            </span>
                            <span className="reveal hover-underline-animation">whoami</span>
                            <span className='whoami'> linux command to print current user</span> 
                        </h2>
                        <div className="bulletPoint" data-aos="fade-right" data-aos-delay="600">
                            24 jaar.
                        </div> <br/>
                        <div className="bulletPoint" data-aos="fade-right" data-aos-delay="700">
                            Hasselt, Belgium.
                        </div> <br/>
                        <div className="bulletPoint" data-aos="fade-right" data-aos-delay="800">
                            Startte PXL Hasselt in januari 2020.
                        </div> <br/>
                        <div className="bulletPoint" data-aos="fade-right" data-aos-delay="900">
                            Studeer af in de zomer van 2022.
                        </div><br/><br/>
                        <div data-aos="fade-up" ata-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-duration="1000" className="buttons">
                            <ButtonPrimary target="https://drive.google.com/file/d/1FgN2m-bkYKwBXuuuXWyXrLXNnKYPlq4x/view?usp=sharing" text="Bekijk mijn ITalent PDF"/>
                            <span className="spacer">&nbsp;</span>
                            <ButtonSecondary target="#skills" text="Bekijk mijn skills"/>
                        </div>
                    </div>
                    <div className="image-side large" data-aos="fade-left" data-aos-delay="500">
                        <img src={aboutSvg}/>
                    </div>

                </div>
                <div className="skills" id='skills'>
                    <div className='about large'>
                        <div className="image-side" data-aos="fade-right" data-aos-delay="500">
                           <img src={skillsSvg}/> 
                        </div>
                        <div className='text-side' data-aos="fade-left" data-aos-delay="500">
                            <Title line1="My skills"/>
                            <h2>Langauges, Frameworks & Tools</h2>
                            <div className="tags">
                                <div className="tag">HTML</div>
                                <div className="tag">CSS</div>
                                <div className="tag">SCSS</div>
                                <div className="tag">Bootstrap</div>
                                <div className="tag">JavaScript</div>
                                <div className="tag">Vue</div>
                                <div className="tag">React</div>
                                <div className="tag">NodeJS</div>
                                <div className="tag">Express</div>
                                <div className="tag">TypeScript</div>
                                <div className="tag">PHP</div>
                                <div className="tag">Laravel</div>
                                <div className="tag">Python</div>
                                <div className="tag">Flask</div>
                                <div className="tag">C#</div>
                                <div className="tag">.NET</div>
                                <div className="tag">Java</div>
                                <div className="tag">Android</div>
                                <div className="tag">SQL</div>
                                <div className="tag">MySQL</div>
                                <div className="tag">MongoDB</div>
                                <div className="tag">Bash</div>
                                <div className="tag">Linux</div>
                                <div className="tag">Windows</div>
                                <div className="tag">Git</div>
                                <div className="tag">Figma</div>
                                <div className="tag">Jira</div>
                                <div className="tag">Confluence</div>
                                <div className="tag">BettyBlocks</div>
                                <div className="tag">etc..</div>
                            </div>
                             </div>
                    </div>
                    
                </div>
                <div className="Italent" id="italent">
                    <div className="content" data-aos="fade-right" data-aos-delay="500">
                        <h1>ITalent</h1>
                        <br />
                        <h3>
                            Tijdens mijn opleiding werkte ik aan een ITalent portfolio. Deze beschrijft wie ik ben en wat ik doe. <br/>
                        </h3>
                    </div>
                    <div className="action" data-aos="fade-left" data-aos-delay="500">
                        <h1>Portfolio</h1>
                        <br/>
                        <h3>
                            Wil u graag meer weten over wie ik ben en wat ik doe? <br /><br />
                            <a href="https://drive.google.com/file/d/1FgN2m-bkYKwBXuuuXWyXrLXNnKYPlq4x/view?usp=sharing" target="_blanc">Klik hier en ga naar mijn ITalent portfolio</a>
                        </h3>
                    </div>
                </div>
                <div className="contact" id="contact">
                    <div className="image-side" data-aos="fade-right" data-aos-delay="500">
                        <img src={contactSvg}/>
                    </div>
                    <div className="text-side" data-aos="fade-left" data-aos-delay="500">
                        <Title line1="Contact"/>
                        <h2 data-aos="fade-left" data-aos-delay="650">
                            <span 
                                className="white">Neem contact met me op! 
                            </span>
                        </h2><br/>
                        <span data-aos="fade-left" data-aos-delay="800" className="label">LinkedIn</span><br/>
                        <div data-aos="fade-left" data-aos-delay="800">
                            <a className="hover-underline-animation" href='https://www.linkedin.com/in/bruyninxmaarten/'>bruyninxmaarten</a>
                        </div> <br/>
                        <span data-aos="fade-left" data-aos-delay="900" className="label">Email</span><br/>
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
