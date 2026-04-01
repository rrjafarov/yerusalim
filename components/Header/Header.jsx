import React from 'react'
import HeaderTop from '@/components/Header/HeaderTop.jsx'
import HeaderMid from '@/components/Header/HeaderMid.jsx'
import HeaderMain from '@/components/Header/HeaderMain.jsx'

const Header = ({categoryData, contactData,t,topLinkData}) => {
  return (
    <div>
        <HeaderTop topLinkData={topLinkData} contactData={contactData} t={t} />
        <HeaderMid contactData={contactData} t={t} />
        <HeaderMain contactData={contactData} t={t} categoryData={categoryData} />
    </div>
  )
}

export default Header