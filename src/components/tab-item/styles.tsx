import styled from "styled-components";

export const Container = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-left: 1.5rem;
  gap: .5rem;
  cursor: pointer;
  border-width: 0;
  border-left-style: solid;
  border-left-width: 0.5rem;
  border-left-color: ${({ active }) => (active ? "var(--disabled-color)" : "transparent")};
  background-color: ${({ active }) => (active ? "var(--background-color)" : "transparent")};
`;


