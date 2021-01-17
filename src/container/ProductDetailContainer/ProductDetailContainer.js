import React from 'react';
import PropTypes from 'prop-types';
import useProduct from './useProduct';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

const ProductDetailContainer = ({id}) => {
	const {product} = useProduct(id);
	return (
			<>
			{product && <ProductDetail {...product}/>}
			</>
	)
};

ProductDetailContainer.propTypes = {
};

ProductDetailContainer.defaultProps = {
};

export default ProductDetailContainer;
