import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './menuStyle.css'
import { getAllCategory } from './../../actions/categoryAction';

export const MenueHeader = (props) => {
  const category = useSelector(state => state.category)
  console.log(category)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllCategory())
  },[])

  const renderCategory = (categories) =>{
    let Mycategories =[]
    for(let category of categories){
        Mycategories.push(
          <li key={category.name}>
          {
            category.parentId ? <a
              href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>
              {category.name}
            </a> :
            <span>{category.name}</span>
          }
          {category.children.length > 0 ? (<ul>{renderCategory(category.children)}</ul>) : null}
        </li>
        )
    }
    return Mycategories
}

  return (<div className='menuHeader'>
 <ul>
   {category.categories.length > 0 ? renderCategory(category.categories):null}
 </ul>

  </div>)
}
