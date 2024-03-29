import styled from "styled-components";

export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 10rem 10rem;
`;

export const Title = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;
  margin-bottom: 3.375rem;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 2.5rem 2rem;
`;