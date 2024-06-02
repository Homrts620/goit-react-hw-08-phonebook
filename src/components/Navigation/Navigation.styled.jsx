import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
display: inline-block;
text-decoration: none;
padding: 12px;
font-weight: 700;
color: #e493a1;
font-size: 25px;

&:hover {
    color: #ff9;
}
`;