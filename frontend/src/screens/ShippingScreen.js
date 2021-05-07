import React, { useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'
import FormContainer from '../components/FormContainer'

const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        history.push('/payment')
    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2/>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group as={Row} controlId='address'>
                    <Form.Label sm='4'>Address</Form.Label>
                    <Form.Control type='text' placeholder='Nombre' value={address} required onChange={(e) => setAddress(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group as={Row} controlId='city'>
                    <Form.Label sm='4'>City</Form.Label>
                    <Form.Control type='text' placeholder='City' value={city} required onChange={(e) => setCity(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group as={Row} controlId='postalCode'>
                    <Form.Label sm='4'>Postal Code</Form.Label>
                    <Form.Control type='text' placeholder='Postal' value={postalCode} required onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group as={Row} controlId='country'>
                    <Form.Label sm='4'>Country</Form.Label>
                    <Form.Control type='text' placeholder='Country' value={country} required onChange={(e) => setCountry(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Continue</Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
