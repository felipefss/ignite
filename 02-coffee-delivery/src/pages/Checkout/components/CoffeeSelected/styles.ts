import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  padding: 0.5rem 0.25rem;
  background-color: ${props => props.theme.card};
  width: 23rem;

  & > span {
    font-weight: bold;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > span {
    line-height: 1.3;
    color: ${props => props.theme.subtitle};
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;