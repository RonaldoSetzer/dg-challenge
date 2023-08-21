import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 280px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`

export const Header = styled.nav`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  align-content: flex-start;

  ul {
    width: 100%;
    list-style: none;
    margin-top: 20px;
  };

  a {
    text-decoration: none;
  };
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  padding-bottom: 1rem;
`;
