import React from 'react'
import './../App.css';
import { Navbar, Image, Nav } from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="justify-content-center">
                <Nav>
                    <Nav.Link href="https://www.facebook.com/thanakorn.kittayathon"><Image src={require("./../assets/images/facebook.png")} style={{width:"25px"}}/></Nav.Link>
                    <Nav.Link href="https://twitter.com/Todi_Seal"><Image src={require("./../assets/images/twitter.png")} style={{width:"25px"}}/></Nav.Link>
                </Nav>
                
            </Navbar>
        </div>
    );
}

export default Footer;
