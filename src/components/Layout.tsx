import React from "react"
import { useStaticQuery, graphql } from "gatsby"

interface LayoutProps {
    readonly children?: React.ReactNode | readonly React.ReactNode[]
}

interface HeaderData {
    site: {
        siteMetadata: {
            title: string
        }
    }
}

const Layout = ({ children }: LayoutProps) => {
    const data: HeaderData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    `)

    return(
        <>
        <main>{children}</main>
        </>
    )
}

export default Layout