import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.white};
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  max-height: 2.375rem;
`;