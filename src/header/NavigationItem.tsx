import {
  Link
} from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: palevioletred;
  text-decoration: none;
  margin: 1rem;
`;

function NavigationItem(props: { path: string, text: string }) {
  return (
    <li>
      <StyledLink to={props.path}>{props.text}</StyledLink>
    </li>
  );
}

export default NavigationItem;