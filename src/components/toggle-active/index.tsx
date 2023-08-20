import { Button, Container, Label, ToggleOff, ToggleOn } from "./styles";

interface ToggleProps {
  active: boolean;
  onChange: () => void;
}

const defaultProps: ToggleProps = {
  active: false,
  onChange: () => { },
};

function ToggleActive({ active, onChange }: ToggleProps) {
  return (
    <Container>
      <Button onClick={onChange}>
        {active ? <ToggleOn /> : <ToggleOff />}
      </Button>
      {active ? <Label active>Allowed</Label> : <Label>Blocked</Label>}
    </Container>
  );
}

ToggleActive.defaultProps = defaultProps;

export default ToggleActive;

