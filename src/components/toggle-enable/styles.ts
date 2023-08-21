import styled from "styled-components";
import { ToggleOff as IconOff, ToggleOn as IconOn } from "../icons";

export const ToggleOn = styled(IconOn)`
  width: 3rem;
  fill: var(--enabled-color);
`;

export const ToggleOff = styled(IconOff)`
  width: 3rem;
  fill: var(--disabled-color);
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

