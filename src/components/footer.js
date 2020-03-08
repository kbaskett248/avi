import React from "react"

import footerStyles from "./footer.module.css";

const Footer = ({ children }) => (
  <div className={ footerStyles.footer } id="footer">
    { children }
  </div>
)

export default Footer
