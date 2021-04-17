import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions';

const Header = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = ()=>{
        dispatch(logout())
    }
    return (
        <header>
            <Navbar className='navbar' bg="light" variant="light" expand="lg" collapseOnSelect>
                <Container className='top-custom' >
                    <LinkContainer to='/'>
                        <Navbar.Brand><img className='img-custom' src="https://i.imgur.com/atUEmxP.png" title="logo" alt='logo' />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavDropdown title="Mac" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">MacBook Air</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">MacBook Pro</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">iMac</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">iMac Mini</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">iMac Pro</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Ipad" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">iPad Pro</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">iPad Air</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">iPad mini</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">iPad 8th</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Iphone" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Watch" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Audio" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Accesorios" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Nav className="ml-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link className='icon-custom'><i className='fas fa-shopping-bag'></i></Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>profile</NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler} >
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : <LinkContainer to='/login'>
                                <Nav.Link className='icon-custom'><i className='fas fa-user'></i></Nav.Link>
                            </LinkContainer>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
