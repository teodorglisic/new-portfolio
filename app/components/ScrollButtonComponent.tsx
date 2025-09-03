'use client'

import React, { MouseEventHandler, ReactNode } from 'react'

const ScrollButtonComponent = ({children, className}:{children:ReactNode, className: string}) => {
  return (
    <button className={className} onClick={()=> document.getElementById("test")?.scrollIntoView({ behavior: "smooth"})}>{children}</button>
  )
}

export default ScrollButtonComponent