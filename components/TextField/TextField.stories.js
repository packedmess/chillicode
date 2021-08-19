import TextField from './TextField';

export default {
  title: 'App/Form/TextField',
  component: TextField,
  argTypes: {},
};

const Template = args => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'TextField',
};
