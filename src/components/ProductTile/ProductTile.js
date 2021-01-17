import React from 'react';
import PropTypes from 'prop-types';
import StyledProductTile from './StyledProductTile';
import laptopImg from '../../images/laptop.png';

const ProductTile = ({ id, name, imgUrl }) => (
	<StyledProductTile>
		<div>	
        	<img src={laptopImg} alt="laptop" />
		</div>
		<div>
			<h4>{name}</h4>
		</div>
	</StyledProductTile>
);

ProductTile.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired
};

ProductTile.defaultProps = {
};

export default ProductTile;
