import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: lightgray;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
