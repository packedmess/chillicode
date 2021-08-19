import Social from './Social';

export default {
  title: 'App/Social',
  component: Social,
  argTypes: {},
};

const Template = args => <Social {...args} />;

export const Default = Template.bind({});
Default.args = {};
