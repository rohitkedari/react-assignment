import React from 'react';
import Header from '../../components/Header';
import { useParams } from "react-router-dom";
import ProductDetailContainer from '../../container/ProductDetailContainer/ProductDetailContainer';

const ProductDetailPage = () => {
	const { id } = useParams();
	return (
		<>
			<Header text="Product Deatils Page" />
			<ProductDetailContainer id={id}/>
		</>)
};

export default ProductDetailPage;
