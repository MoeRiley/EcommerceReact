import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from "./CartWidget"
import { useState, useEffect } from "react"
import { NavLink } from 'react-router'


function NavBar () {
    const [categories, setCategories] = useState ([])

    useEffect (() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategories(data)
            })
    }, [])

    return (
        <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">🛍️ D-todo</Navbar.Brand>
                <Navbar.Toggle aria-controls ="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="categorias" id="basic-nav-dropdown" menuVariant="dark">
                            {categories.map(cat => (
                                <NavDropdown.Item
                                key={cat.slug} 
                                   to={`/category/${cat.slug}`} 
                                   as={NavLink}
                                >
                                   {cat.name}
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