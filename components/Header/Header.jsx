import React from 'react'
import HeaderTop from '@/components/Header/HeaderTop.jsx'
import HeaderMid from '@/components/Header/HeaderMid.jsx'
import HeaderMain from '@/components/Header/HeaderMain.jsx'

const Header = ({categoryData, contactData}) => {
  return (
    <div>
        <HeaderTop contactData={contactData} />
        <HeaderMid contactData={contactData} />
        <HeaderMain contactData={contactData} categoryData={categoryData} />
    </div>
  )
}

export default Header