import NavigationList from './NavigationList';
import styled from 'styled-components';

const StyledHeader = styled.header`
  min-height: 8vh;
  font-size: calc(8px + 2vmin);
`;

function Header() {
  return (
    <StyledHeader>
      <NavigationList />
    </StyledHeader>
  );
}

export default Header;