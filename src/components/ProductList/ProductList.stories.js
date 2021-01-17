import React from 'react';
import { storiesOf } from '@storybook/react';
import  ProductList from './ProductList';

const products = [{
	"id": 1,
	"name": "Lenovo",
	"imageUrl": "<dummyURL>",
	"categoryId": 1
}, {
	"id": 2,
	"name": "Mac",
	"imageUrl": "<dummyURL>",
	"categoryId": 1
}, {
	"id": 3,
	"name": "Dell",
	"imageUrl": "<dummyURL>",
	"categoryId": 1
},{
	"id": 4,
	"name": "Lenovo",
	"imageUrl": "<dummyURL>",
	"categoryId": 1
}, {
	"id": 5,
	"name": "Mac",
	"imageUrl": "<dummyURL>",
	"categoryId": 1
}, {
	"id": 6,
	"name": "Dell",
	"imageUrl": "<dummyURL>",
	"categoryId": 1
},{
	"id": 7,
	"name": "Lenovo",
	"imageUrl": "<dummyURL>",
	"categoryId": 1
}, {
	"id": 8,
	"name": "Mac",
	"imageUrl": "<dummyURL>",
	"categoryId": 1
}, {
	"id": 9,
	"name": "Dell",
	"imageUrl": "<dummyURL>",
	"categoryId": 1
}];
	
storiesOf('components/Product List', module).add('with default', () => (
	<ProductList products={products} />
));
