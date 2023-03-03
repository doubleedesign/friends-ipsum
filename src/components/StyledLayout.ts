import styled from 'styled-components';

export const StyledPageWrapper = styled.main`
    background-image: url('../../public/Central_Perk_set.jpg');
    background-size: cover;
    background-position: center center;
	min-height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	
	&:after {
		content: '';
		position: absolute;
		background: #21163B;
		opacity: 0.75;
		background-blend-mode: multiply;
		inset: 0;
	}
`;

export const StyledHeader = styled.header`
    font-family: 'Kalam', cursive;
	text-align: center;
	text-transform: uppercase;
	padding-top: 2rem;
    position: relative;
    z-index: 5;
	
	h1 {
		color: white;
		font-weight: 700;
		margin: 0;
		
		span {
			font-weight: 400;
		}
	}
`;

export const StyledFooter = styled.footer`
    font-family: 'Inter Tight', sans-serif;
	text-align: center;
	padding-top: 2rem;
    position: relative;
	margin-top: auto;
    z-index: 5;
	color: white;
	
	small {
		display: block;
		margin: 0.25rem 0;
	}
	
	a {
		color: white;
	}
`;
