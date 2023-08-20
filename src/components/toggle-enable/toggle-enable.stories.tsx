import ToggleEnable from "."

export default {
  title: "ToggleEnable",
  component: ToggleEnable,
};

export const Default = () => <ToggleEnable />;

Default.story = {
  name: "default",
};

export const Enable = () => <ToggleEnable active/>;

Enable.story = {
  name: "enabled",
};

export const Disable = () => <ToggleEnable active={false}/>;
Disable.story = {
  name: "disabled",
};

