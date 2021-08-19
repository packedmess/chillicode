import Button from './Button';

export default {
  title: 'App/Buttons/Button',
  component: Button,
  argTypes: {},
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  color: 'primary',
};
