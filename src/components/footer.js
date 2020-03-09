import React from "react"

import footerStyles from "./footer.module.css";

const Footer = ({ children }) => (
  <div className={ footerStyles.footer + " scheme1" }>
    <div style={{ margin: "0 auto", maxWidth: 960 }} >
      { children }
    </div>
  </div>
)

export default Footer
