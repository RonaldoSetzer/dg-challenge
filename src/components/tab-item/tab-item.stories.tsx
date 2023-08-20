import TabItem from '.';

export default {
  title: 'TabItem',
  component: TabItem,
};

export const Default = () => <TabItem label='Default' />;
Default.story = {
  name: 'default',
};

export const Active = () => <TabItem label='Active' active />;
Active.story = {
  name: 'active',
};

export const Inactive = () => <TabItem label='Inactive' />;
Inactive.story = {
  name: 'inactive',
};

