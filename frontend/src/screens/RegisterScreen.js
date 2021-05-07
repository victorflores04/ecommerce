import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'


const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            //Dispatch Register
            dispatch(register(name, email, password))
        }
    }
    return (
        <FormContainer>
            <h1>Crear nueva cuenta</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group as={Row} controlId='name'>
                    <Form.Label column sm='4'>Nombre</Form.Label>
                    <Col sm="8">
                        <Form.Control type='name' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                    </Col>
                </Form.Group>
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
                <Form.Group as={Row} controlId='confirmPassword'>
                    <Form.Label column sm='4'>Confirmar contraseña</Form.Label>
                    <Col sm="8">
                        <Form.Control type='confirmPassword' placeholder='Confirmar contraseña' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>
                    </Col>
                </Form.Group>
                <Button type='submit' variant='primary'>Crear una cuenta</Button>
                <Link> ¿Olvidó su contraseña?</Link>
            </Form>
            <Row className='py-3'>
                <Col>
                    tiene una cuenta?{''}
                    <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}> Iniciar sesion</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen
