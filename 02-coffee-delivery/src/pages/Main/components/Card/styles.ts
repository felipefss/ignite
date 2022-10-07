import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 16rem;

  background-color: ${props => props.theme.card};
  border-radius: 0.375rem 2.25rem;
`;

export const Image = styled.img`
  max-width: 7.5rem;
  margin-top: -1.25rem;
  margin-bottom: 0.75rem;
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const Tag = styled.span`
  background-color: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  margin-bottom: 1.25rem;

  font-size: 0.625rem;
  font-weight: 400;
  line-height: 1.3;
  text-transform: uppercase;
`;

export const Name = styled.h3`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${props => props.theme.subtitle};
`;

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${props => props.theme.label};
  margin: 0.5rem 1.25rem 2rem;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.375rem;
  margin-bottom: 1.25rem;
`;

export const Price = styled.div`
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${props => props.theme.text};

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export const Purchase = styled.div`
  display: flex;
  gap: 0.5rem;
`;