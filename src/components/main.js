import React from 'react'
import {Link} from "gatsby"
export default function Main (){

    return(
        <>
        <h1>this is my main page</h1>
        <Link to= "/product/page1">ProductI</Link>
        <br/>
        <Link to ="/product/page2">ProductII</Link>
        </>
    )
}