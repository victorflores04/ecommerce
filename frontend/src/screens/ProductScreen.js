import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Badge, Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = ({ match }) => {

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    return (
        <>
            <Link className='btn btn-light my-3' to='/' > &#60; Go back</Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Row>
                    <Col md={5}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item as='div'><h5><Badge variant="light">Apple</Badge></h5>SKU: MGMN3LZ/A</ListGroup.Item>
                            <ListGroup.Item>
                                <h5> {product.name} </h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item className='text-color'>
                                <h4>S/. {product.price}</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h8>1. Escoge tu color favorito</h8>
                                <Row className='top'>
                                        <Button className='btn-push-color left yellow' variant="primary"></Button>
                                        <Button className='btn-push-color plomo' variant="primary"></Button>
                                        <Button className='btn-push-color red' variant="primary"></Button>
                                        <Button className='btn-push-color verde' variant="primary"></Button>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card className='card-custom-sshpoing'>
                            <ListGroup variant='flush' >
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price:
                            </Col>
                                        <Col>
                                            <strong>S/. {product.price} </strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                        Cantidad:
                                        </Col>
                                    </Row>
                                    <Row className='top'>
                                        <Button className='btn-push' variant="primary"><i class="fas fa-minus"></i></Button>
                                        <h4 className='top'>1</h4>
                                        <Button className='btn-push' variant="primary"><i class="fas fa-plus"></i></Button>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button className='btn-block' type='button' disabled={product.countInStock === 0} >Agregar al carrito</Button>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    )
}

export default ProductScreen
