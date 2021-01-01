import React from "react"
import ProductTwo from "../components/product2"
import ProductOne from "../components/product1"
import Layout from "../components/Layout"
import Main from "../components/main"
import {Router} from "@reach/router"
//import {Link} from "gatsby"
export default function Product(){

return(
<Layout>
    <Router basepath="/product">
<ProductOne path="/page1"/>
<ProductTwo path="/page2"/>
<Main path="/"/>
    </Router>
 </Layout>   
    )
}