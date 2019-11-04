import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ siteTitle }) => (
  <Navbar>
    <Navbar.Brand>{siteTitle}</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Nav>
        <Nav.Link as={Link} to="/" activeLinkKey="/">
          View Stash
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
