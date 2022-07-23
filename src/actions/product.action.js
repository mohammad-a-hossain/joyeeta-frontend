import axios from "../helpers/axios"
import { productsConstant } from "./constant"



export const getProductsBySlug= (slug)=>{
      return async dispatch=>{
          const res = await axios.get(`/products/${slug}`)
          console.log(res)
          if(res.status === 200){
          dispatch({
              type:productsConstant.GET_ALL_PRODUCTSBY_SLUG,
              payload:res.data
          })
          }else{
              // somthing
          }
      }
}

export const getProductsPage= (payload)=>{
    return async dispatch=>{
        try{
        const { catId, type} = payload.params
        const res = await axios.get(`/page/${catId}/${type}`)
        dispatch({type:productsConstant.GET_ALL_PRODUCTS_PAGE_REQUEST})
        if(res.status === 200){
            const { page} = res.data
            dispatch({
            type:productsConstant.GET_ALL_PRODUCTS_PAGE_SUCCESS,
            payload:{page}
            })
        }else{
          const {error} = res.data 
          dispatch({
            type: productsConstant.GGET_ALL_PRODUCTS_PAGE_FAILURE,
            payload:{error}
          })
        }
        }catch(error){
            console.log(error)
        }
   
    }
}
export const getProductDetailsById =(payload)=>{
     return async dispatch =>{
        dispatch({type:productsConstant.GET_PRODUCT_DETAILS_BY_ID_REQUEST})
        let res
        try{
         const { productId}= payload.params 
         res = await axios.get(`/product/${productId}`)
         console.log(res)
         dispatch({
            type:productsConstant.GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
            payload:{productDetails:res.data.product}
         })
        }catch(error){
            console.log(error)
            dispatch({
                type:productsConstant.GET_PRODUCT_DETAILS_BY_ID_FAILURE,
                payload:{error:res.data.error}
             })
        }
     }
}
