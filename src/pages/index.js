import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

function IndexPage() {
  // const [products, setProducts] = useState([]);
  const products = useStaticQuery(graphql`
    {
      allWcProducts {
        edges {
          node {
            id
            name
            images {
              id
              name
              src
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {products.allWcProducts.edges.map((value, key) => {
          return (
            <div
            key={key}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {value.node.name}
              <img src={value.node.images[0].src}/>
            </div>
          )
        })}
      </div>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
