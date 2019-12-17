import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 16px 32px;;
`;

export const Links = styled.div`
	display: flex;
`;

export const NavLink = styled(Link)`
	margin-left: 4px;
`;


