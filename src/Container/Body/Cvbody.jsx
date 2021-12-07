import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import '../../Css/Cvbody.css'
import Profilepic from "../../images/profilepic.jpg"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SchoolIcon from '@mui/icons-material/School';




export default function Cvbody() {
    return (
        <div>
            <div className="header">
                <div className="name">
                    <h1>Bishesh Tuladhar</h1>
                </div>
            </div>

            <div className="Details">
                <Container>
                    <Row>
                        <Col>
                            <Image className="profilepic" src={Profilepic} roundedCircle />
                        </Col>
                        <Col>
                            <h2>About Me:</h2>
                            <p>Blah blah blah</p>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="Contact">
                                <h2>Contact:</h2>
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
                            <h2><SchoolIcon/> Education</h2>
                            <div className="educationflex">
                                <h4> Bachelor's in Information and Technology</h4>
                                <span>Softwarica College of IT & E-commerce</span>
                            </div>
                            <div className="educationflex">
                                <h4> +2 (Science)</h4>
                                <span>Price College</span>
                            </div>
                            <div className="educationflex">
                                <h4> SLC</h4>
                                <span>Rehdon Higher Secondary School</span>
                            </div>

                        </Col>
                    </Row>
                </Container>
                <div className="firstcol">

                </div>
            </div>
        </div>
    )
}