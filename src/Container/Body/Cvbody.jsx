import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import '../../Css/Cvbody.css'
import Profilepic from "../../images/profilepic.jpg"
import FlutterIcon from '../../images/flutterlogo.png'
import CssIcon from '../../images/css.png'
import HtmlIcon from '../../images/html.png'
import JavaScriptIcon from '../../images/javascript.png'
import KotlinIcon from '../../images/kotlin.png'
import PythonIcon from '../../images/python.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';




export default function Cvbody() {
    return (
        <div className="Cvbody">
            <div className="header">
                <div className="name">
                    <div className="def">
                    <h1>Bishesh Tuladhar</h1>
                    {/* <span>React Js Developer</span> */}
                    </div>
                    

                </div>
            </div>

            <div className="Details">
                <Container>
                    <Row>
                        <Col>
                            <div className="profilepicwrapper">
                                <Image className="profilepic" src={Profilepic} roundedCircle />
                            </div>

                        </Col>
                        <Col>
                            <h2>About Me:</h2>
                            <span>I am a very Enthusiastic and Hardworking person who believes is ready to learn new things.</span>
                            <h2>Hobbies</h2>
                            <span>
                                Some of my hobbies include:
                                <ul>
                                    <li>Video Games</li>
                                    <li>Basket Ball</li>
                                    <li>Video Editing</li>

                                </ul>
                            </span>
                            <h2>Languages:  </h2>
                            <span>

                                <ul>
                                    <li>English</li>
                                    <li>Newari</li>
                                    <li>Nepali</li>
                                    <li>Hindi</li>

                                </ul>
                            </span>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="Contact">
                                <h2>Contact:</h2>
                            </div>
                            <div className="Contact">
                                <div className="Contact_Details">
                                    <span><LocationOnIcon /> Nayabazaar, Kathmandu</span>
                                    <span><CallIcon /> 9813033635</span>
                                    <span><EmailOutlinedIcon /> bishesh.tuladhar1@gmail.com</span>

                                    <div className="links">
                                        <span>Links: </span>
                                        <a target="_blank" href={"https://github.com/Bisheshxx"}><LinkedInIcon /></a>
                                        <a target="_blank" href={"https://github.com/Bisheshxx"}><GitHubIcon /></a>
                                    </div>

                                </div>

                            </div>
                        </Col>
                        <Col>
                            <h2><SchoolIcon /> Education</h2>
                            <div className="educationflex">
                                <h4>Softwarica College of IT & E-commerce</h4>
                                <span>2019 - 2021</span>
                                <span>BSc (Hons) Computing</span>
                            </div>
                            <div className="educationflex">
                                <h4> Prime College</h4>
                                <span>+2 (Science)</span>
                                <span>2014-2016</span>

                            </div>
                            <div className="educationflex">
                                <h4>Rehdon Higher Secondary School</h4>
                                <span>Class of 2074</span>
                                <span>SLC</span>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Skills</h2>
                            <div className="skills">
                                <Row>
                                    <Col>
                                        <Image className="skills__image" src={FlutterIcon} alt="Flutter" />
                                    </Col>
                                    <Col>
                                        <Image className="skills__image" src={PythonIcon} />
                                    </Col>
                                    <Col>
                                        <Image className="skills__image" src={CssIcon} />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Image className="skills__image" src={JavaScriptIcon} />
                                    </Col>
                                    <Col>
                                        <Image className="skills__image" src={HtmlIcon} />
                                    </Col>
                                    <Col>
                                        <Image className="skills__image" src={KotlinIcon} />
                                    </Col>
                                </Row>






                            </div>
                        </Col>
                        <Col>
                            <h2>Working Projects</h2>
                            <a target="_blank" href='https://practical-allen-faba84.netlify.app/?fbclid=IwAR1VD4dVTwLJQEBp8bXdOkxdqxhbbyxzqjd_RT4KQRjSl_EuTlhXou1AXfI'>Covid Tracker Website</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
