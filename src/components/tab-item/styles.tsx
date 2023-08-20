import styled from "styled-components";

export const Container = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: .5rem;
  gap: .5rem;
  cursor: pointer;
  border-left-style: solid;
  border-left-width: 10px;
  border-left-color: ${({ active }) => (active ? "#FF0000" : "transparent")};
  background-color: ${({ active }) => (active ? "#f5f6fa" : "transparent")};
`;

