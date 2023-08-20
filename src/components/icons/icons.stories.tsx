import { ToggleOff, ToggleOn } from "."
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export default {
  title: "Icons",
}

export const Toggle = () =>
  <Container>
    <ToggleOn size={30}/>
    <ToggleOff size={30}/>
  </Container>

Toggle.story = {
  name: "Toggle",
}

