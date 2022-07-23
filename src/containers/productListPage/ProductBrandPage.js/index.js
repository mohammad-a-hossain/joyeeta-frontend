import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsPage } from '../../../actions';
import getParams from '../../../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ban1 from './ban1.jpg'
import ban2 from './bann2.jpg'
import Card from '../../../components/UI/Card';



const ProductBrandPage = (props) => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product)
    const {page} = product

    useEffect(()=>{
        const params = getParams(props.location.search)
         console.log(params)
        const payload={
            params
        }
       dispatch(getProductsPage(payload))
    },[])
  return (
    <><h2>{page.title}</h2>
    <Carousel>
    
   
        <div>
         <img src={ban1} alt='banner img'/>
         <p className="legend">Legend 1</p>
         </div>
         <div>
         <img src={ban2} alt='banner img'/>
         <p className="legend">Legend 1</p>
         </div>
    
</Carousel>
<hr/>
<div style={{display:'flex'}}>
      <Card>
      <img src={ban2}/>
      </Card>
</div>
       
   
    </>
  )
}

export default ProductBrandPage