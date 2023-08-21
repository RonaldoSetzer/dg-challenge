import ToggleActive from "../toggle-active";
import { Container, Header, Body, Title } from "./styles";

interface PluginCardProps {
  title?: string;
  description?: string;
  enable?: boolean;
  active?: boolean;
  onToggleActive?: () => void;
}

const defaultProps: PluginCardProps = {
  title: '--',
  description: '--',
  enable: true,
  active: true,
  onToggleActive: () => { },
};

function PluginCard({ title, description, enable, active, onToggleActive }: PluginCardProps) {
  function handleToggleActive() {
    if (onToggleActive && enable) {
      onToggleActive();
    }
  }
  return (
    <Container enable={enable}>
      <Header>
        <Title>{title}</Title>
        <ToggleActive
          active={active}
          onChange={handleToggleActive}
        />
      </Header>
      <Body> {description}</Body>
    </Container>
  )
}

PluginCard.defaultProps = defaultProps;

export default PluginCard;

