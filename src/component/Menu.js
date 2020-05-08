import React from 'react'
import './../App.css';
import { Image , Navbar, NavDropdown, Nav} from 'react-bootstrap';

function Menu() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/Home"><Image src={require("./../assets/images/home.png")} width="25px" /></Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                    <NavDropdown title="Lesson">
                        <NavDropdown.Item href="/Page2">Lesson 2</NavDropdown.Item>
                        <NavDropdown.Item href="/Nothing">Lesson 3</NavDropdown.Item>
                        <NavDropdown.Item href="/Nothing">Lesson 4</NavDropdown.Item>
                        <NavDropdown.Item href="/Nothing">Lesson 5</NavDropdown.Item>
                        <NavDropdown.Item href="/Nothing">Lesson 6</NavDropdown.Item>
                    </NavDropdown>
                        
                    <NavDropdown title="Team">
                        <NavDropdown.Item href="http://Panggundam00.github.io">Team's Page</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://panggundam00.github.io/pang.html">Pang</NavDropdown.Item>
                        <NavDropdown.Item href="https://poisonousheart.github.io/">Tar</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;
