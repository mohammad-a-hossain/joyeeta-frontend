import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './menuStyle.css'
import { getAllCategory } from '../../actions';

export const MenueHeader = (props) => {
  const category = useSelector(state => state.category)
  //console.log(category.length)
 
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllCategory())
  },[])

  const renderCategory = (categories) =>{
    let myCategories =[]
    for(let category of categories){
      myCategories.push(
          <li key={category.name}>
          {
             category.parentId ? <a 
              href={`/${category.slug}?catId=${category._id}&type=${category.type} `}>
              {category.name}
            </a> : 
           <span>{category.name}</span>
          }
   
          {category.children.length > 0 ? (<ul>{renderCategory(category.children)}</ul>) : null}
        </li>
       
        )
    }
    return  myCategories
}

  return (<div className='menuHeader'>
 <ul>
   {category.categories.length > 0 ? renderCategory(category.categories):null}
 </ul>

  </div>)
}
