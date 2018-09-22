import React from "react"
import { css } from "react-emotion"
import { Link, StaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet';

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}

    render={data => (
      <div
        className={css`
      margin: 0 auto;
      max-width: 700px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content="Are you a panda lover? Come on in to see the world's most amazing pandas!" />
          <title>Amazing Pandas</title>
          <link rel="canonical" href="http:localhost:9000" />
        </Helmet>

        <Link to={`/`}>
          <h3
            className={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
          >
            {data.site.siteMetadata.title}
      </h3>
        </Link>
        <Link
          to={`/about/`}
          className={css`
        float: right;
      `}
        >
          About
    </Link>
        {children}
      </div>
    )}
  />
)