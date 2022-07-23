import React from 'react'
import Layout from '../../components/Layout'
import './style.css'
import {ProductStore} from './ProductStore/index'
import getParams from '../../utils/getParams'
import ProductBrandPage from './ProductBrandPage.js'



export const ProductListPage =(props)=> {
  const renderProduct =()=>{
  //  console.log(props)
      const params =getParams(props.location.search)
    //  console.log(params)
      let content =null 
      switch(params.type){
        case 'store':
          content = <ProductStore {...props}/>;
          break;
        case 'page':
          content =<ProductBrandPage {...props}/>;
          break;
          default:
          content = null;
      }
     return content
  }

  return (
    <Layout>
       {renderProduct()}
    </Layout>
  )
  
}
 