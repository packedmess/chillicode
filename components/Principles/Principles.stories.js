import Principles from './Principles';

export default {
  title: 'App/Principles',
  component: Principles,
  argTypes: {},
};

const Template = args => <Principles {...args} />;

export const Default = Template.bind({});
Default.args = {};
