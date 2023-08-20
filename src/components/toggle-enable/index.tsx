import { Button, ToggleOff, ToggleOn } from "./styles";

interface ToggleProps {
  active: boolean;
  onChange: () => void;
}

const defaultProps: ToggleProps = {
  active: true,
  onChange: () => { },
};

function ToggleEnable({ active, onChange }: ToggleProps) {
  return (
    <Button onClick={onChange}>
      {active ? <ToggleOn /> : <ToggleOff />}
    </Button>
  );
}

ToggleEnable.defaultProps = defaultProps;

export default ToggleEnable;


