import Main from './Main';

export default {
  title: 'App/Main',
  component: Main,
  argTypes: {},
};

const Template = args => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {};
