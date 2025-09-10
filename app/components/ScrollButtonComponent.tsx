'use client'

import React, { MouseEventHandler, ReactNode } from 'react'

const ScrollButtonComponent = ({children, className, to}:{children:ReactNode, className: string, to:string}) => {
  return (
    <button className={className} onClick={()=> document.getElementById(to)?.scrollIntoView({ behavior: "smooth"})}>{children}</button>
  )
}

export default ScrollButtonComponent