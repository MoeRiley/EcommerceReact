import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from "./CartWidget"
import { useState, useEffect } from "react"
import { NavLink } from 'react-router-dom'
import { getCategories } from '../firebase/db'


function NavBar () {
    const [categories, setCategories] = useState ([])

    useEffect(() => {
        getCategories().then(cats => setCategories(cats))
    }, [])

    return (
        <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand as={NavLink} to="/">🛍️ D-todo</Navbar.Brand>
                <Navbar.Toggle aria-controls ="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="categorias" id="basic-nav-dropdown" menuVariant="dark">
                            {categories.map(cat => (
                                <NavDropdown.Item
                                    key={cat}
                                    as={NavLink}
                                    to={`/category/${cat}`}
                                >
                                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <Nav className="ms-auto">
                        <CartWidget />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar