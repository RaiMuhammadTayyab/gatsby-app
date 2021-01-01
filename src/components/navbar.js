import React from "react"
import {Link} from "gatsby"
import style from "./navbar.module.css"
export default function Navbar(){
return(
<div className={style.nav}>
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>
<Link to='/product'>Product</Link>
<Link to="/fruit">Fruits</Link>
</div>)
}