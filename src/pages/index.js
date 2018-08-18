import React from 'react'
import { push } from 'gatsby'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import ResponsiveEmbed from 'react-responsive-embed'
import Layout from '../components/layout'
import EventCalendar from '../components/EventCalender'

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
          display: 'flex',
          justifyContent: 'center',
          margin: 20,
        }}
      >
        <div
          style={{
            margin: 16,
            width: '50%',
            minWidth: 100,
            maxWidth: 200,
            cursor: 'pointer',
          }}
          onClick={() => {
            push('/about/')
          }}
        >
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div
          style={{
            margin: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h4 style={{ textAlign: 'center' }}>
            Classic Rocksteady, Reggae & Ska
          </h4>
          <Link to="/about">
            <h4 style={{ color: '#7a0515' }}>About Us</h4>
          </Link>
        </div>
      </div>
      <br />
      <div
        style={{
          minWidth: 320,
          width: '100%',
          padding: 20,
          borderRadius: 12,
          backgroundColor: 'lightgray',
          display: 'inline-flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          alignContent: 'center',
        }}
      >
        <div style={{ alignSelf: 'center', minWidth: 100, width: 600 }}>
          <ResponsiveEmbed src="https://www.youtube.com/embed/pPkiTV3qq0w" />
        </div>
        <EventCalendar />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    file(relativePath: { regex: "/LOGO_Alpha-TreasureTones/" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
