import React from 'react';
import { useParams } from "react-router-dom";
import ProductListContainer from '../../container/ProductListContainer';
import Header from '../../components/Header';

const ProductListPage = () => {	
	const { categoryId } = useParams();
	return(
		<>
			<Header text="Product List Page" />
			<ProductListContainer categoryId={parseInt(categoryId)}/>
		</>);
};

export default ProductListPage;
