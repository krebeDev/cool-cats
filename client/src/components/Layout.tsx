import * as React from 'react'

const Layout = ({ children }: any): JSX.Element => {
  return (
    <>
      <header>This is the header</header>
      <main>{children}</main>
      <footer>This is the footer</footer>
    </>
  )
}

export default Layout
