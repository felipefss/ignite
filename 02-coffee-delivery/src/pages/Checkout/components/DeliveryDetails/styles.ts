import styled from "styled-components";

export const DeliveryContainer = styled.div`
  padding: 2.5rem;
  background-color: ${props => props.theme.card};
  width: 40rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;
`;

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${props => props.theme["yellow-dark"]};
  }
`;

export const Title = styled.div`
  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${props => props.theme.subtitle};
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${props => props.theme.text};
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Info = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  background-color: ${props => props.theme.input};
  border: 1px solid ${props => props.theme.button};
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3;
  color: ${props => props.theme.text};
  outline: none;

  width: ${props => props.width ? `${props.width}rem` : 'inherit'};

  &:focus, &:focus ~ span {
    border-color: ${props => props.theme["yellow-dark"]};
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex: 1;
`;

export const GrownInput = styled(Input)`
  flex: 1;
`;

export const ComplementoInput = styled(GrownInput)`
  flex: 1;

  &:placeholder-shown {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: none;
  }

  &:not(:placeholder-shown) ~ span {
    display: none;
  }
`;

export const OptionalText = styled.span`
  background-color: ${props => props.theme.input};
  vertical-align: middle;
  padding: 0.88rem 0.75rem;
  border: 1px solid ${props => props.theme.button};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left: none;

  font-size: 0.75rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.3;
  color: ${props => props.theme.label};
`;