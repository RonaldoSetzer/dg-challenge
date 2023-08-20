import ToggleActive from "."

export default {
  title: "ToggleActive",
  component: ToggleActive,
};

export const Default = () => <ToggleActive />;

Default.story = {
  name: "default",
};

export const Active = () => <ToggleActive active/>;

Active.story = {
  name: "allowed",
};

export const Inactive = () => <ToggleActive active={false}/>;
Inactive.story = {
  name: "blocked",
};

