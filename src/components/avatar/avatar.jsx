import React from 'react';
import PropTypes from 'prop-types';

import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

import './avatar.css';

export default function Avatar({uri}) {
  const {file: avatar} = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "profile.png"}) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  if (uri) {
    return <img className='avatar' src={uri} alt='main-avatar' />;
  }
  return (
    <Img
      className='avatar'
      fixed={avatar.childImageSharp.fixed}
      alt='main-avatar'
    />
  );
}

Avatar.propTypes = {
  uri: PropTypes.string
};
