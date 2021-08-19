import Tab from './Tab';

export default {
  title: 'App/Tab',
  component: Tab,
  argTypes: {},
};

const Template = args => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {};
