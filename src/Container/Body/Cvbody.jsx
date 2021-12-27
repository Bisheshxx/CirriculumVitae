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
            <Container>
                <div className="header">

                    <div className="def">
                        <div className="profilepicwrapper">
                            <div className="profileflex">
                                <Image className="profilepic" src={Profilepic} roundedCircle />
                                <div className="header__info">
                                    <h1>Bishesh Tuladhar</h1>
                                    <span >I am a very Enthusiastic and Hardworking person who believes is ready to learn new things.</span>
                                </div>
                            </div>

                            <div className="Contact">
                                <div className="Contact_Details">
                                    <span> Nayabazaar, Kathmandu <LocationOnIcon /></span>
                                    <span> 9813033635 <CallIcon /></span>
                                    <span> bishesh.tuladhar1@gmail.com <EmailOutlinedIcon /></span>

                                    <div className="links">
                                        <span>Links: </span>
                                        <a target="_blank" href={"https://github.com/Bisheshxx"}><LinkedInIcon /></a>
                                        <a target="_blank" href={"https://github.com/Bisheshxx"}><GitHubIcon /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="seperater"></div>

                <div className="Detail">
                    <Row>
                        <Col>
                            <h2><SchoolIcon /> EDUCATION</h2>
                            <div className="educationflex">
                                <h4>Softwarica College of IT & E-commerce</h4>
                                <span>BSc (Hons) Computing</span>
                                <div className="educationflex__flex">
                                    <span>2019 - 2021</span>
                                    <span>Dillibazaar, Kathmandu</span>
                                </div>
                            </div>
                            <div className="educationflex">
                                <h4> Prime College</h4>
                                <span>+2 (Science)</span>
                                <div className="educationflex__flex">
                                    <span>2019 - 2021</span>
                                    <span>Khushibu, Kathmandu</span>
                                </div>


                            </div>
                            <div className="educationflex">
                                <h4>Rehdon Higher Secondary School</h4>
                                <span className='educationlevel'>SLC</span>
                                <div className="educationflex__flex">
                                    <span>2019 - 2021</span>
                                    <span>Samakhushi, Kathmandu</span>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <h2>PERSONAL SKILLS</h2>
                            <div className="pskills">
                                <div className="pskills__text">
                                    Leadership Skills
                                </div>
                                <div className="pskills__text">
                                    Communication Skills
                                </div>
                                <div className="pskills__text">
                                    Quick Learner
                                </div>
                                <div className="pskills__text">
                                    Documentation
                                </div>
                            </div>
                            <div className="pskills">
                                <div className="pskills__text">
                                    Research Skills
                                </div>
                                <div className="pskills__text">
                                    Research Skills
                                </div>
                            </div>
                            <h2>TECHNICAL SKILLS</h2>
                            <div className="skills">
                                <div className="skills__flex">
                                    <Row>
                                        <Col className='imgcol'><Image className="skills__image" src={FlutterIcon} alt="Flutter" /></Col>
                                        <Col>
                                            <div className='circle_flex'>
                                                <span className="circle__notblank"></span>
                                                <span className="circle__notblank"></span>
                                                <span className="circle__blank"></span>
                                                <span className="circle__blank"></span>
                                                <span className="circle__blank"></span>
                                            </div>
                                        </Col>
                                    </Row>


                                </div>
                                <div className="skills__flex">
                                    <Row>
                                        <Col className='imgcol'><Image className="skills__image" src={PythonIcon} /></Col>
                                        <Col>
                                            <div className='circle_flex'>
                                                <span className="circle__notblank"></span>
                                                <span className="circle__notblank"></span>
                                                <span className="circle__blank"></span>
                                                <span className="circle__blank"></span>
                                                <span className="circle__blank"></span>
                                            </div>
                                        </Col>
                                    </Row>


                                </div>
                                <div className="skills__flex">
                                    <Row>
                                        <Col className='imgcol'><Image className="skills__image" src={CssIcon} /></Col>
                                        <Col>
                                            <div className='circle_flex'>
                                                <span className="circle__notblank"></span>
                                                <span className="circle__notblank"></span>
                                                <span className="circle__blank"></span>
                                                <span className="circle__blank"></span>
                                                <span className="circle__blank"></span>
                                            </div>
                                        </Col>
                                    </Row>


                                </div>
                                <div className="skills__flex">
                                    <Row>
                                        <Col className='imgcol'><Image className="skills__image" src={JavaScriptIcon} /></Col>
                                        <Col>
                                            <div className='circle_flex'>
                                                <span className="circle__notblank"></span>
                                                <span className="circle__notblank"></span>
                                                <span className="circle__blank"></span>
                                                <span className="circle__blank"></span>
                                                <span className="circle__blank"></span>
                                            </div>
                                        </Col>
                                    </Row>


                                </div>
                                <div className="skills__flex">
                                    <Row>
                                        <Col className='imgcol'><Image className="skills__image" src={HtmlIcon} /></Col>
                                        <Col>
                                            <div className='circle_flex'>
                                                <span className="circle__notblank"></span>
                                                <span className="circle__notblank"></span>
                                                <span className="circle__blank"></span>
                                                <span className="circle__blank"></span>
                                                <span className="circle__blank"></span>
                                            </div>
                                        </Col>
                                    </Row>


                                </div>
                                <div className="skills__flex">
                                    <Row>
                                        <Col className='imgcol'><Image className="skills__image" src={KotlinIcon} /></Col>
                                        <Col>
                                            <div className='circle_flex'>
                                                <span className="circle__notblank"></span>
                                                <span className="circle__notblank"></span>
                                                <span className="circle__blank"></span>
                                                <span className="circle__blank"></span>
                                                <span className="circle__blank"></span>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>

                    </Row>
                    <Row>

                        <Col>
                            <h2>WORK EXPERIENCE:</h2>
                            <div className="workflex">
                                <h4>GRID Pvt. Ltd.</h4>
                                <span>worked with AutoCAD</span>
                                <span>15 th March 2017- 14 th March 2018</span>
                                <span>
                                    <ul>
                                        <li>Worked as an Intern for a year in an engineering firm designing the drainage layout of buildings
                                            in AutoCAD</li>
                                        <li>Briefly worked with GIS for plotting terrains, roads and populated areas of Ramechhap District</li>
                                    </ul>
                                </span>
                            </div>
                            <h2>Achievements</h2>
                            <div className="workflex">
                                <h4>Artificial Intelligence Analyst 2019 Mastery Award</h4>
                                <h4>IBM </h4>
                                <span>Artificial Intelligence Analyst 2019 Mastery Award</span>
                                <span>
                                    13 March 2020
                                </span>
                            </div>
                            <br />
                            <div className="workflex">
                                <h4>In College Essay Competition</h4>
                                <h4>Prime College </h4>
                                <span>First in College Essay Competition</span>
                                <span>
                                    2015
                                </span>
                            </div>
                            <h2>Interests</h2>
                            <div className="interests">
                                <div className="pskills__text">
                                    Graphic Designing
                                </div>
                                <div className="pskills__text">
                                    App Development
                                </div>
                                <div className="pskills__text">
                                    Big Data
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <h2>PROJECTS</h2>
                            <div className="projects__flex">
                                <a target="_blank" href='https://github.com/Bisheshxx/Covid-Tracker-__frontend' style={{ color:'black',fontSize: "25px", fontWeight: "800",textDecoration:'none' }}>Covid Tracker Nepal</a>
                                <ul>
                                    <li>Website developed using MERN Stack for tracking Covid Cases</li>
                                    <li>A platform for voluteering, donation and news on Covid for Nepal</li>

                                </ul>
                            </div>
                            <div className="projects__flex">
                                <a target="_blank" href='https://github.com/Bisheshxx/homeSecuritySystem' style={{ color:'black',fontSize: "25px", fontWeight: "800",textDecoration:'none' }}>Home Security System</a>
                                <ul>
                                    <li>An IOT project using RFID / NODE MCU/ MQ-2 Sensor/Servo Motor and Buzzer.</li>
                                    <li>A security system for a household using Interactive Pervasive System</li>

                                </ul>
                            </div>
                            <div className="projects__flex">
                                <a target="_blank" href='https://github.com/Bisheshxx/Assignment_modernwebsite' style={{ color:'black',fontSize: "25px", fontWeight: "800",textDecoration:'none' }}>Mustang Travels (Bike Rental Website)</a>
                                <ul>
                                    <li>A bike rental website</li>
                                    <li>The website was developed using django</li>

                                </ul>
                            </div>
                            <div className="projects__flex">
                                <a target="_blank" href='https://github.com/Bisheshxx/Bluetoothkeyfinder' style={{ color:'black',fontSize: "25px", fontWeight: "800",textDecoration:'none' }}>Bluetoothkeyfinder</a>
                                <ul>
                                    <li>An IOT project using NODE MCU and a Buzzer.</li>
                                    <li>A device which can be attached to keys which notifies the user of its position when pinged through a mobile app using Interactive Pervasive System</li>

                                </ul>
                            </div>
                            <h2>WORKING PROJECTS</h2>
                            <a target="_blank" href='https://practical-allen-faba84.netlify.app/?fbclid=IwAR1VD4dVTwLJQEBp8bXdOkxdqxhbbyxzqjd_RT4KQRjSl_EuTlhXou1AXfI'>Covid Tracker Website</a>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}
