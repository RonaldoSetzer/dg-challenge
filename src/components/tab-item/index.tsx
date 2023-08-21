import { Container } from "./styles";
import { getIcon } from "../icons";

interface TabProps {
  label: string;
  active?: boolean;
  icon?: string;
}

function TabItem({ label, icon, active }: TabProps) {
  const Icon = getIcon(icon);
  return (
    <Container active={active}>
      <Icon size={20} />
      {label}
    </Container>
  );
}

export default TabItem;

