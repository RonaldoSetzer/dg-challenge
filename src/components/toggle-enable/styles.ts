import styled from "styled-components";
import { ToggleOff as IconOff, ToggleOn as IconOn } from "../icons";

export const ToggleOn = styled(IconOn)`
  width: 2.5rem;
  fill: green;
`;

export const ToggleOff = styled(IconOff)`
  width: 2.5rem;
  fill: red;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

