import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { SelectedProduct , RemoveSelectedProduct } from "../Redux/Actions/ProductAction"
import Loader from './Loader';
import { Card, Container, Row } from 'react-bootstrap';


const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.Products);
  const { image, description, title, price, category } = products;
  const dispatch = useDispatch();
  console.log(id + "line999999")
  console.log( products.title + "djavjchvsd")

 

  const fetchProductDetail = async (id) => {
    const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .catch(err => {
      console.log("err", err)
    })
    dispatch(SelectedProduct(response.data))
    // console.log( response +"line 1999")
  }



  useEffect(() => {
    if (id  && id ) fetchProductDetail(id);
    return () => {
      dispatch(RemoveSelectedProduct())
    }
  }, [id])

  return (
    <Container className="">
      {Object.keys(products).length === 0 ? (
        <Loader/>
      ) : (
        <Row className=" mt-5 pt-1">
          <div className="Detailgrid border">
          <div className="column">
                <img src={image} className="ui fluid image" alt={title} />
              </div>
              <div className="column border-left ps-5 pt-5">
                <h1>{title}</h1>
                <h2>
                  <Link to='#' className="ui teal tag label text-decoration-none">${price}</Link>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p className='fs-4 text-secondary lh-base'>{description}</p>
                <div className="ui vertical animated button bg-danger text-white" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
          </div>
        </Row>
      )}
    </Container>
  )
}

export default ProductDetails