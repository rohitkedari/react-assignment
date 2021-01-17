import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './StyledHeader';

const Header = ({ text }) => (
	<StyledHeader>
		<h1>{text}</h1>
	</StyledHeader>
);

Header.propTypes = {
	text: PropTypes.string
};

Header.defaultProps = {
	text: null,
};

export default Header;
