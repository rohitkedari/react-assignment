import React from 'react';
import { storiesOf } from '@storybook/react';
import  Header from './Header';

storiesOf('components/Header', module).add('with default', () => (
	<Header />
)).add('with content', () => (	
	<Header text="Product Deatils Page" />
));;
