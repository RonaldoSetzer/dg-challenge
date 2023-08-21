import styled from "styled-components";
import { ToggleOff as IconOff, ToggleOn as IconOn } from "../icons";

export const ToggleOn = styled(IconOn)`
  width: 3rem;
  fill: var(--enabled-color);
`;

export const ToggleOff = styled(IconOff)`
  width: 3rem;
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
  font-size: .8rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "var(--enabled-color)" : "var(--disabled-color)")};
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;


