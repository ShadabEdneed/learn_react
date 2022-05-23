import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.Products);
  const truncate = (input) => input.length > 20 ? `${input.substring(0, 25)}...` : input;

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Col sm={3} className="" key={id}>
      <Link to={`/productdetails/${id}`} className="text-decoration-none">
          <Card className='h-100'>
            <Col  className="g-4 card-img">
              <Card.Img variant="top" src={image} className="img-fluid"/>
            </Col>
            <Card.Body className='border-top'>
              <Card.Title className='text-decoration-none text-dark trancute'>{truncate(`${title}`)}</Card.Title>
              <Card.Text className='text-decoration-none text-danger fs-3 fw-bold'>
                <h4> $ {price}</h4>
              </Card.Text>
              <h4 className='text-decoration-none text-secondary'>{category}</h4>
            </Card.Body>
          </Card>
      </Link>
        </Col>
    )
  })
  return <>{renderList}</>
}

export default ProductComponents