import MainLayout from './MainLayout';

export default {
  title: 'App/MainLayout',
  component: MainLayout,
  argTypes: {},
};

const Template = args => <MainLayout {...args} />;

export const Default = Template.bind({});
Default.args = {};
