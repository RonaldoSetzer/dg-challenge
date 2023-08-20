import styled from 'styled-components';
import PluginCard from '.';

const Container = styled.div`
  width: 200px;
`;

export default {
  title: 'PluginCard',
  component: PluginCard,
};

export const Default = () => (
  <Container>
    <PluginCard />
  </Container>
);

Default.story = {
  name: 'default',
};

export const Active = () => (
  <Container>
    <PluginCard
      title="Card Title"
      description="Card Description"
      active={true}
    />
  </Container>
);

Active.story = {
  name: 'active',
};

export const Inactive = () => (
  <Container>
    <PluginCard
      title="Card Title"
      description="Card Description"
      active={false}
    />
  </Container>
);
Inactive.story = {
  name: 'inactive',
};

export const Disable = () => (
  <Container>
    <PluginCard
      title="Card Title"
      description="Card Description"
      active={true}
      enable={false}
    />
  </Container>
);
Disable.story = {
  name: 'disable',
};

