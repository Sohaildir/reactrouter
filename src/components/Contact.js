import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <>
    <div>
     <header>
      <nav>
        <Link to ="/home">
      <li>home </li></Link>
      <Link to ="/contact"><li>contact </li></Link>
      <Link to ="/about"><li>about </li></Link>
        
      </nav>
    </header>
    </div>
    <h1>this is contact page</h1>
    </>
  )
}
