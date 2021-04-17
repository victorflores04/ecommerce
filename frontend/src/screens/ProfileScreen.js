import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstans'

const ProfileScreen = ({ location, history }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name || success) {
                dispatch({type: USER_UPDATE_PROFILE_RESET})
                dispatch(getUserDetails('profile'))
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            //Dispatch update profile
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }
    return (
        <Row>
            <Col md={3}>
                <h2>Perfil</h2>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {success && <Message variant='success'>perfil actualizado</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group as={Row} controlId='name'>
                        <Form.Label sm='4'>Nombre</Form.Label>
                        <Form.Control type='name' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group as={Row} controlId='email'>
                        <Form.Label sm='4'>Correo electrónico</Form.Label>

                        <Form.Control type='email' placeholder='Correo electrónico' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>

                    </Form.Group>
                    <Form.Group as={Row} controlId='password'>
                        <Form.Label sm='4'>Contraseña</Form.Label>

                        <Form.Control type='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>

                    </Form.Group>
                    <Form.Group as={Row} controlId='confirmPassword'>
                        <Form.Label sm='4'>Confirmar contraseña</Form.Label>

                        <Form.Control type='confirmPassword' placeholder='Confirmar contraseña' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></Form.Control>

                    </Form.Group>
                    <Button type='submit' variant='primary'>Actualizar cuenta</Button>
                </Form>
            </Col>
            <Col md={9}>
                <h2>My orders</h2>
            </Col>
        </Row>
    )
}

export default ProfileScreen
