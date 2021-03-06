import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#7a0515',
      marginBottom: '1.45rem',
      position: 'fixed',
      width: '100%',
      zIndex: 90,
      height: 100,
    }}
  >

    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
