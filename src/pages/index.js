import React from 'react'
import { push } from 'gatsby'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  console.log('INDEX', data)

  return (
    <Layout>
      <div
        style={{
          width: '50%',
          marginLeft: 'auto',
          marginRight: 'auto',
          cursor: 'pointer',
        }}
        onClick={() => {
          push('/about/')
        }}
      >
        <Img imgStyle={{}} fluid={data.file.childImageSharp.fluid} />
      </div>
      <br />
      <h4 style={{ textAlign: 'center' }}>
        Classic Rocksteady, Reggae & Ska from Honolulu, HI
      </h4>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { regex: "/LOGO-TTCigarettepack/" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
