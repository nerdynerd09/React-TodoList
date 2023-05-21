import React from 'react'

export const Footer = () => {
  const footerStyle = {"width":"100%","top":"100vh","position":"relative"}

    return ( 
      <footer className="footer mt-auto py-3 bg-light" style={footerStyle}>
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
    )
}