import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import './../App.css';

export default function Home() {
    return (
        <div>
            <Container style={{backgroundColor:"#D7D7D7",paddingBottom:"25px"}} fluid>
                <Row>
                    <Col><Image src={require("./../assets/images/profile.png")} style={{paddingTop: "25px",paddingBottom:"25px"}}/></Col>
                </Row>
                <Container style={{backgroundColor:"white", width:"25%"}}>
                    <Row  className="justify-content-md-center">
                        <Col style={{paddingTop:"10px"}}><h2>About Me</h2></Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingTop:"10px"}} >
                        <Col xs={6} md={4}>Name: </Col> <Col xs={12} md={8}> Thanakorn Kittayathon</Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingTop:"10px"}}>
                        <Col xs={6} md={4}>ID: </Col> <Col xs={12} md={8}> 6110401625</Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingTop:"10px"}}>
                        <Col xs={6} md={4}>Nickname: </Col> <Col xs={12} md={8}> Pond</Col>
                    </Row> 
                    <Row className="justify-content-md-center" style={{paddingTop:"10px"}}>
                        <Col xs={6} md={4}>Favorite: </Col> <Col xs={12} md={8}> Tonkatsu curry rice</Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingTop:"10px"}}>
                        <Col xs={6} md={4}>Programming skil: </Col> 
                        <Col xs={12} md={8}><Image src={require("./../assets/images/cLogo.png")} width="50px" style={{paddingRight:"10px"}}/>
                                        <Image src={require("./../assets/images/javaLogo.jpg")} width="50px" style={{paddingRight:"10px"}}/></Col>
                    </Row>
                    <Row className="justify-content-md-center" style={{paddingTop:"10px",paddingBottom:"25px"}}>
                        <Col xs={6} md={4}>Hobby: </Col> 
                        <Col xs={12} md={8}><Image src={require("./../assets/images/earphones.png")} width="50px" style={{paddingRight:"10px"}}/> 
                                        <Image src={require("./../assets/images/technology.png")} width="50px" style={{paddingRight:"10px"}}/>
                                        <Image src={require("./../assets/images/play.png")} width="50px" style={{paddingRight:"10px"}}/></Col>
                    </Row>
                </Container>
            </Container>
            
        </div>
    )
}
