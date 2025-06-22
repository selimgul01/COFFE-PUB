import React from 'react'

const NavbarItem = ({menu}) => {
  return (
    <div className='text-xl  text-light hover:text-slate-400 hover:border-b border-b-slate-400 transition-all duration-200 cursor-pointer'>
      {menu.name}
    </div>
  )
}

export default NavbarItem
