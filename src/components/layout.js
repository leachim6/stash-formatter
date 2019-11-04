import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'react-bootstrap';

import './layout.scss';
import Header from './header';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>{children}</Container>
      <footer>
        &copy; {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
