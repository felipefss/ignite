import styled from "styled-components";

export const SuccessContainer = styled.div`
  padding: 5rem 10rem 0;
`;

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${props => props.theme["yellow-dark"]};
  margin-bottom: 0.25rem;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.3;
  font-stretch: 100%;
  color: ${props => props.theme.subtitle};
  margin-bottom: 2.5rem;
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderInfoWrapper = styled.div`
  height: fit-content;
  background: linear-gradient(
      to right,
      ${props => props.theme.yellow},
      ${props => props.theme.purple}
    );
    padding: 1px;
    border-radius: 0.375rem 2.25rem;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  
  padding: 2.5rem;
  border: 1px solid transparent;
  border-radius: 0.375rem 2.25rem;
  background-color: white;
`;

export const InfoDetail = styled.div`
  display: flex;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;

    line-height: 1.3;
    color: ${props => props.theme.text};
  }
`;

const ICON_COLORS = {
  local: 'purple',
  time: 'yellow',
  payment: 'yellow-dark'
} as const;

interface IconProps {
  variant: keyof typeof ICON_COLORS;
}

export const Icon = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;

  background-color: ${props => props.theme[ICON_COLORS[props.variant]]};
  border-radius: 1000px;

  svg {
    margin: auto;
    color: ${props => props.theme.white};
  }
`;