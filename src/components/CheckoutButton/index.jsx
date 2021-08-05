import React from 'react'
import { Link } from 'react-router-dom'
import RightArrow from '../RightArrow'
import './button.css'

export const CheckoutButton = ({ className, children, href, to }) => {
  const handleButton = () => {}

  return (
    <>
      {href ? (
        <button onClick={handleButton} className={`checkoutButton ${className}`}>
          {children} <RightArrow />
        </button>
      ) : (
        <Link to={to} className={`checkoutButton ${className}`}>
          {children} <RightArrow />
        </Link>
      )}
    </>
  )
}
