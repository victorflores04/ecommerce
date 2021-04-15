import React from 'react'
import { Nav } from 'react-bootstrap'

const TopBar = () => {
    return (
        <div>
            <Nav className="color-custom" expand="lg" defaultActiveKey="/home" as="ul">
                <Nav.Item  as="li">
                    <Nav.Link className='link-custom' href="/home">Tiendas</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link className='link-custom' eventKey="link-1">Servicio Técnico</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link className='link-custom' eventKey="link-2">Información coorporativa</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default TopBar
