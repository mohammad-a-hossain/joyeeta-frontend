import React from 'react'
import { MenueHeader } from '../MenueHeader'
import { Header } from '../Header';


const Layout=(props)=> {
  return (
    <>
    <Header/>
    <MenueHeader/>
    {props.children}
    </>
  )
}
export default Layout