import React,{useEffect} from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux';
import {getProductDetailsById} from '../../actions'
import Carousel from 'react-bootstrap/Carousel';
import { generatePublicUrl } from '../../apiUrlConfig'
import Button from 'react-bootstrap/Button';

const ProductDetailsPage = (props) => {
  const dispatch = useDispatch()
  const product = useSelector(state =>state.product)
  
  useEffect(()=>{
    const {productId}= props.match.params 
    console.log(props)
        const payload={
           params:{
            productId,
           },
        }
       dispatch(getProductDetailsById(payload))
  },[])

  if(Object.keys(product.productDetails).length===0) return null

  return (
  <Layout>
 

  <div style={{display:"flex"}}>

  <div style={{width:'50%',padding:'22px'}}>
 {product.productDetails.productPics.map((thumb,index)=>(
  <Carousel variant="dark">
  
     <Carousel.Item>
        <img
          className="d-block w-100"
          src={generatePublicUrl(thumb.img)} alt={thumb.img}
        />
     </Carousel.Item>
  
     
  
    </Carousel>
     ))}
     <div style={{width:'50%',display:'flex'}}>
     <Button className="m-2"  variant="danger">Add to Cart</Button>
     <Button className="m-2" variant="warning">Buy Now</Button>
     </div>
    
    </div>

  <div style={{width:'50%',padding:'22px',backgroundColor:'lightblue'}}>
  
    <h4>Product: {product.productDetails.name}</h4> 
    <h5> Price tk.{product.productDetails.price}</h5>
    <small>Available offer</small>
   <p>description: <br/> {product.productDetails.description
   }</p>  
  </div>
  </div>
  </Layout>
  )
}

export default ProductDetailsPage