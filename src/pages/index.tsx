import React from "react"
import { PageProps } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Card from "../components/Card"

function App(props: PageProps) {
    return (
        <>
        <SEO />
        <Layout>
        <Card><p>Hello</p></Card>
        </Layout>
        </>
    )
}

export default App
