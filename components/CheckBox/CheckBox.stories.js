import CheckBox from './CheckBox';

export default {
  title: 'App/Form/CheckBox',
  component: CheckBox,
  argTypes: {},
};

const Template = args => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'CheckBox',
};
