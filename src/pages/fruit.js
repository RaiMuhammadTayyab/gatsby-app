import React from "react"
import ProductThree from "../components/product3"
import Layout from "../components/Layout"
import MainOne from "../components/main2"
import {Router} from "@reach/router"
//import {Link} from "gatsby"
export default function Fruit(){

return(
<Layout>
    <Router basepath="/fruit">
<ProductThree path="/Mango"/>
<MainOne path="/"/>
    </Router>
 </Layout>   
    )
}