import Stack from './Stack';

export default {
  title: 'App/Stack',
  component: Stack,
  argTypes: {},
};

const Template = args => <Stack {...args} />;

export const Default = Template.bind({});
Default.args = {};
