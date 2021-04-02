import NavigationItem from './NavigationItem';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

function NavigationList() {
  return (
    <nav>
      <StyledList>
        <NavigationItem path="/" text="Home" />
        <NavigationItem path="/about" text="About" />
        <NavigationItem path="/blog" text="Blog" />
        <NavigationItem path="/resume" text="Resume "/>
      </StyledList>
    </nav>
  );
}

export default NavigationList;