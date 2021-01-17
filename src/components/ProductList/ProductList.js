import React from 'react';
import PropTypes from 'prop-types';
import StyledProductList from './StyledProductList';
import ProductTile from '../ProductTile';
import { Link } from "react-router-dom";

const ProductList = ({ products }) => (
	<StyledProductList>
		{
			products.map((product) => {
				return <li key={product.id}>
					<Link to={`/products/${product.id}`}>
						<ProductTile
							id={product.id}
							name={product.name}
							imgUrl={product.imgUrl}
						/>
					</Link>
				</li>
			})
		}
	</StyledProductList>
);

ProductList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		categoryId: PropTypes.number.isRequired,
	})),
};

ProductList.defaultProps = {
	products: null,
};

export default ProductList;
