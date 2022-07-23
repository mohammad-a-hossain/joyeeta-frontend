import { productsConstant } from "../actions/constant"

const inistate ={
    products:[],
    productsByPrice:{
        under200:[],
        under300:[], 
        under800:[],
        under1000:[],
        under2000:[]
    },
    pageRequest:false,
    page:{},
    error:null,
    productDetails:{},
    loading:false

}
export default ( state= inistate, action)=>{
            switch(action.type){
                case productsConstant.GET_ALL_PRODUCTSBY_SLUG:
                    state={
                        ...state,
                        products:action.payload.products,
                        productsByPrice:{
                        ...action.payload.productsByPrice,
                       
                        }
                    }
                    break;
                case productsConstant.GET_ALL_PRODUCTS_PAGE_REQUEST:
                    state={
                        ...state,
                       pageRequest:true
                        
                        }
                    
                    break;
                case productsConstant.GET_ALL_PRODUCTS_PAGE_SUCCESS:
                    state={
                        ...state,
                      page:action.payload.page,
                      pageRequest:false
                    }
                    break;
                    case productsConstant.GGET_ALL_PRODUCTS_PAGE_FAILURE:
                        state={
                            ...state,
                          pageRequest:false,
                          error:action.payload.error

                        }
                        break;
                    case productsConstant.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
                        state={
                            ...state,
                            loading:true,
                        }
                        break;
                    case productsConstant.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
                        state={
                            ...state,
                            loading:false,
                            productDetails:action.payload.productDetails
                        }
                        break;
                    case productsConstant.GET_PRODUCT_DETAILS_BY_ID_FAILURE:
                        state={
                            ...state,
                            loading:false,
                            error:action.payload.error
                        }
                        break;
            }
            return state
}