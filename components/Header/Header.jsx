import React from 'react'
import HeaderTop from '@/components/Header/HeaderTop.jsx'
import HeaderMid from '@/components/Header/HeaderMid.jsx'
import HeaderMain from '@/components/Header/HeaderMain.jsx'

const Header = () => {
  return (
    <div>
        <HeaderTop />
        <HeaderMid />
        <HeaderMain />
    </div>
  )
}

export default Header