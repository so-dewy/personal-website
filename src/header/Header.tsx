import NavigationList from './NavigationList';
import styled from 'styled-components';

const StyledHeader = styled.header`
  min-height: 8vh;
  font-size: calc(8px + 2vmin);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

function Header() {
  return (
    <StyledHeader>
      Roman Azami
      <NavigationList />
    </StyledHeader>
  );
}

export default Header;