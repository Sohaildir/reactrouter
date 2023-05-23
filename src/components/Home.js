import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
    <header>
      <nav>
        <Link to ="/home">
      <li>home </li></Link>
      <Link to ="/contact"><li>contact </li></Link>
      <Link to ="/about"><li>about </li></Link>
        
      </nav>
    </header>
    <h1>this is hom page</h1>
    </>
  )
}
