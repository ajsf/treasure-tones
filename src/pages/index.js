import React from 'react'
import { push } from 'gatsby'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import ScriptTag from 'react-script-tag'
import YouTube from 'react-youtube'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  console.log('INDEX', data)
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  }

  return (
    <Layout>
      <div
        style={{
          maxWidth: 300,
          marginLeft: 'auto',
          marginRight: 'auto',
          cursor: 'pointer',
        }}
        onClick={() => {
          push('/about/')
        }}
      >
        <Img fluid={data.file.childImageSharp.fluid} />
        <br />
        <h4 style={{ textAlign: 'center' }}>
          Classic Rocksteady, Reggae & Ska
        </h4>
        <h4 style={{ textAlign: 'center', color: '#7a0515' }}>About Us</h4>
      </div>
      <br />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <div>
          <YouTube videoId="pPkiTV3qq0w" opts={opts} />
        </div>

        <div style={{ width: 600, minWidth: 200 }}>
          <h2>See Us Live</h2>
          <ScriptTag
            charSet="utf-8"
            src="https://widget.bandsintown.com/main.min.js"
          />
          <a
            className="bit-widget-initializer"
            data-artist-name="Swans"
            data-display-local-dates="false"
            data-auto-style="false"
            data-text-color="#000000"
            data-link-color="#7a0515"
            data-popup-background-color="#FFFFFF"
            data-background-color="#FFFFFF"
            data-display-limit="15"
            data-link-text-color="#FFFFFF"
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { regex: "/LOGO-TTCigarettepack/" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
