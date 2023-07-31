import styled from "styled-components";

const StyledToolbar = styled.div`
  height: fit-content;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  display: flex;
  padding: 5px 10px;
`;

const StyledButton = styled.button`
  height: 28px;
  width: 28px;
  margin-left: 10px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  border: transparent;
  color: ${({ theme }) => theme.colors.font.primary};
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.focused};
    /* background-color: red; */
    /* height: 200px; */
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.bg.secondary};
  }
`;

function Toolbar(props) {
  return (
    <StyledToolbar>
      <StyledButton></StyledButton>
      <StyledButton></StyledButton>
      <StyledButton></StyledButton>
    </StyledToolbar>
  );
}

export default Toolbar;
