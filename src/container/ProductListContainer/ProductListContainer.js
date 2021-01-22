import React from 'react';
import PropTypes from 'prop-types';
import CategoryFilter from '../../components/CategoryFilter';
import ProductList from '../../components/ProductList';
import useCategories from '../../hooks/useCategories';
import useProducts from '../../hooks/useProducts';

const ProductListContainer = ({categoryId}) => {
	const {
		categories,
		selectedCatId,
		changeSelectedCategory
	} = useCategories(categoryId);
	const {products} = useProducts(selectedCatId);

	return selectedCatId ?
		<>
			<CategoryFilter
				categories={categories}
				selectedCatId={selectedCatId}
				onCategorySelected={changeSelectedCategory}
			/>
			<ProductList products={products}/>
		</> :
		null
};

ProductListContainer.propTypes = {
	categoryId: PropTypes.number,
};

ProductListContainer.defaultProps = {
	categoryId: null,
};

export default ProductListContainer;
