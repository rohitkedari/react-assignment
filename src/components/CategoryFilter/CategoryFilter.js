import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StyledCategoryFilter from './StyledCategoryFilter';

const CategoryFilter = ({ categories, selectedCatId, onCategorySelected }) => {
	const [value, setValue] = useState(selectedCatId);

	const onChangeHandler = (e) => {
		const selectedValue = parseInt(e.target.value);
		if (onCategorySelected && selectedValue) {
			onCategorySelected(selectedValue);
		}
		setValue(selectedValue);
	};

	useEffect(() => {
		setValue(selectedCatId);
	}, [selectedCatId]);
	return (
		<StyledCategoryFilter>
			<h3>Category:</h3>
			<select onChange={onChangeHandler} value={value}>
				{
					categories.map((category) => {
						return (
							<option key={category.id} 
								value={category.id}>
								{category.name}
							</option>)
					})
				}
			</select>
		</StyledCategoryFilter>
	)
};

CategoryFilter.propTypes = {
	categories: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	})),
	selectedCatId: PropTypes.number,
	onCategorySelected: PropTypes.func,
};

CategoryFilter.defaultProps = {
	categories: [],
	selectedCatId: null,
	onCategorySelected: null,
};

export default CategoryFilter;
