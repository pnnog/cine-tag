import {NavLink as NavLinkDom} from 'react-router-dom'
import { tv } from 'tailwind-variants'


const navLink = tv({
  base:'text-lg font-normal text-gray-300 ',
  variants:{
    isActive:{
      true:'font-bold border-b-2 border-b-yellow-500',
    }
  }
})


const NavLink =({to, children}) =>{
  return(
    <NavLinkDom 
      to={to}
      className={({isActive})=> navLink({isActive})}> {children } 
   </NavLinkDom>
  )
}

export default NavLink
