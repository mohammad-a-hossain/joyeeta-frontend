
import { categoryConstant } from './../actions/constant';


const initState ={
    categories:[],
    loading:false,
    error:''
}
const reBuildNewCategories=(parentId, categories, category)=>{
    let myCategories = []
  
// if a new category where no parent id

if(parentId === undefined){
    return [
        ...categories,
        {
            _id: category._id,
            name: category.name,
            slug: category.slug,
            type: category.type,
            children: []
        }
    ];
}


    for(let cat of categories){

        if(cat._id === parentId){
           
            myCategories.push({
                ...cat,
               children: cat.children ? reBuildNewCategories(parentId,[...cat.children,{
                   _id: category._id,
                   name: category.name,
                   slug: category.slug,
                   parentId: category.parentId,
                   children: category.children,
               }],category) :[]
            })
        }else{
            myCategories.push({
                ...cat,
                children: cat.children ? reBuildNewCategories(parentId, cat.children, category): []
            })
         
        }
      
    }


    return myCategories;

}

export default (state = initState, action)=>{
    switch(action.type){
        
        case  categoryConstant.GETALLCATEGORY_SUCCESS:
            state={
                ...state,
                categories: action.payload.categories
            }
        break;
        case  categoryConstant.ADDNEW_CATEGORY_REQUEST:
            state={
                ...state,
                loading:true
               
            }
        break;
        case  categoryConstant.ADDNEW_CATEGORY_SUCCESS:
            const category = action.payload.category
            const updatedCategories = reBuildNewCategories(category.parentId, state.categories, category);
            console.log('updated categoires', updatedCategories);
            state={
                ...state,
                categories:updatedCategories,
                loading:false
               
            }
        break;
        case  categoryConstant.ADDNEW_CATEGORY_FAILURE:
            state={
                ...initState,
               
            }
        break;
    
    }
    return state
}