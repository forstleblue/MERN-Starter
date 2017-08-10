import React, { PropTypes } from 'react'
import Header from '../../components/Header'

export const CoreLayout = ({children}) => (
  <div className="container">
    <Header />
    {children}
  </div>
)

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoreLayout