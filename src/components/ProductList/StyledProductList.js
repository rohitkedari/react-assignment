import styled from 'styled-components';

const StyledProductList = styled('ul')`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0px;
	display: grid;
	grid-gap: 1rem;
	list-style-type: none;

	@media (min-width: 600px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (min-width: 900px) {
		 grid-template-columns: repeat(4, 1fr);
	}
	>li {
		>a {
			text-decoration: none;
			color: #000000;
		}
	}
`;

export default StyledProductList;
