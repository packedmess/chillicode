import TabList from './TabList';

export default {
  title: 'App/TabList',
  component: TabList,
  argTypes: {},
};

const Template = args => <TabList {...args} />;

export const Default = Template.bind({});
Default.args = {};
