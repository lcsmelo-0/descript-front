import React from 'react'
import { useRouter } from 'next/router'
import RightArrow from '../RightArrow'
import './button.module.css'

export const Button = ({ className, children, href, to }) => {
  const handleButton = () => {}
  const router = useRouter()

  return (
    <>
      {href ? (
        <button onClick={handleButton} className={`checkoutButton ${className}`}>
          {children} <RightArrow />
        </button>
      ) : (
        <a onClick={() => router.push(to)} className={`checkoutButton ${className}`}>
          {children} <RightArrow />
        </a>
      )}
    </>
  )
}
