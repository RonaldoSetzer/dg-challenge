import { Folder } from "@styled-icons/bootstrap";
import { Container } from "./styles";

interface TabProps {
  label: string;
  active?: boolean;
}

function TabItem({ label, active }: TabProps) {
  return (
    <Container active={active}>
      <Folder size={20} />
      {label}
    </Container>
  );
}

export default TabItem;

