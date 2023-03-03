import styled from 'styled-components';

export const StyledOutput = styled.div`
	background: #21163B;
	padding: 2rem;
	box-sizing: border-box;
    font-family: 'Inter Tight', sans-serif;
	color: white;
	max-width: 800px;
	margin: 0 auto;
    position: relative;
    z-index: 5;
	
	p {
		margin-top: 0;
		
		&:last-child {
			margin-bottom: 0;
		}
	}
`;
