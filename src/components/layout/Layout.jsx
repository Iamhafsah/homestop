import Navigation from 'components/navigation'
import React from 'react'

const footerStyle = `
text-center
py-6
border-t
`

const Layout = ({children}) => {
  return (
    <div>
      <Navigation/>
      {children}
      <div className={footerStyle}>
        ©<b>Home</b>stop. {new Date().getFullYear()} 
      </div>
    </div>
  )
}

export default Layout