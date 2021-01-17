import React from 'react';
import { storiesOf } from '@storybook/react';
import  CategoryFilter from './CategoryFilter';

const categories = [{
	"id": 1,
	"name": "Laptops"
}, {
	"id": 2,
	"name": "Mobiles"
}, {
	"id": 3,
	"name": "Speakers"
}];	

storiesOf('components/Category Filter', module).add('with default', () => (
	<CategoryFilter categories={categories} />
));
