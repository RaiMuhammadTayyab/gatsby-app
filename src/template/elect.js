import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";     
import Layout from '../components/Layout'

export default function Elect({pageContext}){

    const {itemDetails} = pageContext
    return <Layout>
        <h1>{itemDetails.title}</h1>
        <p>{documentToReactComponents(JSON.parse(itemDetails.description.raw))}</p>  
    </Layout>
}