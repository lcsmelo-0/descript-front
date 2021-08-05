import React from 'react'
import { Link } from 'react-router-dom'

export const FormButton = ({ className, children, to }) => {
  return (
    <Link to={to}>
      <button className={`btn btn-primary btn-block ${className}`}>{children}</button>
    </Link>
  )
}
