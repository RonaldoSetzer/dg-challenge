import styled from "styled-components";

const Container = styled.div`
  padding: 0;
  padding-left: 2rem;
`;

function Logo() {
  return (
    <Container>
      <h2>DG<strong>CHALLENGE</strong></h2>
    </Container>
  );
}

export default Logo;
