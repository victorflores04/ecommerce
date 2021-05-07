import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'


const LoginScreen = ({ location, history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        //Dispatch login
        dispatch(login(email, password))
    }
    return (
        <FormContainer>
            <h1>Clientes registrados</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group as={Row} controlId='email'>
                    <Form.Label column sm='4'>Correo electrónico</Form.Label>
                    <Col sm="8">
                        <Form.Control type='email' placeholder='Correo electrónico' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId='password'>
                    <Form.Label column sm='4'>Contraseña</Form.Label>
                    <Col sm="8">
                        <Form.Control type='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                    </Col>
                </Form.Group>
                <Button type='submit' variant='primary'>Iniciar Sesión</Button>
                <Link> ¿Olvidó su contraseña?</Link>
            </Form>
            <Row className='py-3'>
                <Col>
                    New customer?<Link to={redirect ? `/register?redirect=${redirect}` : '/register'}> Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen
