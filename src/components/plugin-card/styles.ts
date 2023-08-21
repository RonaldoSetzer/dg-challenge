import styled from 'styled-components';

export const Container = styled.article<{ enable?: boolean }>`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  padding: 1.5rem;
  diplsay: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  opacity: ${({ enable }) => enable ? 1 : 0.3};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 0.5rem;
`;

export const Body = styled.p``

export const Title = styled.h3`
  padding: 0;
  padding-top: 0.5rem;
`

