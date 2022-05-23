import React, {useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector } from 'react-redux';
import ProductComponents from './ProductComponents';
import {SetProduct} from "../Redux/Actions/ProductAction"

const ProductListing = () => {
  // const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
    .get('https://fakestoreapi.com/products')
    .catch((err) => {
        console.log("err", err)
    })
    dispatch(SetProduct(response.data))
  }

  useEffect(() => {
    fetchProduct()
  },[])
  // console.log("product",products)

  return (
    <div className='py-5 container'>
    <div className="four-column">
      <ProductComponents/>
    </div>
    </div>
  )
}

export default ProductListing