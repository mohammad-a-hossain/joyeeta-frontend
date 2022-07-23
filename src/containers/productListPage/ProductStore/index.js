
import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { generatePublicUrl } from '../../../apiUrlConfig';
import image from '../image/logo512.png'
import { getProductsBySlug } from './../../../actions/product.action';
import { Link } from 'react-router-dom';


export const ProductStore =(props)=> {

  const product = useSelector(state => state.product)
 


  const dispatch = useDispatch()

  useEffect(()=>{
    const {match} = props
     dispatch(getProductsBySlug(match.params.slug))
  },[])

   
  return (
         <>
         
        {
          Object.keys(product.productsByPrice).map((key,index)=>{
            return(
              
                <div className='card'>
         
                <div className='cardHeader'>
                  <div>
                  {props.match.params.slug} under 500tk
                  </div>
                  <button type="button">view all</button>
                </div>

                <div style={{display:"flex"}}>
                {
                  product.productsByPrice[key].map(products =>
                    <Link to={`/${products.slug}/${products._id}/p`} className='productContainer'>
                    <div className='productImgContainer'>
                    <img src={generatePublicUrl(products.productPics.img)} alt={image}/>
                    </div>
                    <div className='productInfo'>
                    {products.name}
                    </div>
                  <div>
                    <span>4.22</span>
                    <span>8.22</span>
                  </div>
                  <div className='productPrice'>
                  {products.price}
                  </div>
                  </Link>
                    
                    )
                }
                </div>
                </div>
            )
          })
          
        }
        </>
  )
  
}
 