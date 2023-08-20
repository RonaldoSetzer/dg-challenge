import styled from "styled-components";
import { ToggleOff as IconOff, ToggleOn as IconOn } from "../icons";

export const ToggleOn = styled(IconOn)`
  width: 2rem;
  fill: green;
`;

export const ToggleOff = styled(IconOff)`
  width: 2rem;
  fill: red;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0rem;
`;

export const Label = styled.label<{ active?: boolean }>`
  font-size: .5rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "green" : "red")};
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;


