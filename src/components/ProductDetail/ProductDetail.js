import React from 'react';
import PropTypes from 'prop-types';
import StyledProductDetail,
	{ StyledLeftPanel, StyledRightPanel } from './StyledProductDetail';
import laptopImg from '../../images/laptop.png';

const ProductDetail = ({ id, name, imgUrl, description, category }) => (
	<StyledProductDetail>
		<StyledLeftPanel>	
        	<img src={laptopImg} alt="laptop" />
		</StyledLeftPanel>
		<StyledRightPanel>
			<h3>{category.name}</h3>
			<h2>{name}</h2>
			<div>{description}</div>
		</StyledRightPanel>
	</StyledProductDetail>
);

ProductDetail.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	category: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired
	}).isRequired,
};

ProductDetail.defaultProps = {
};

export default ProductDetail;
