import FileField from './FileField';

export default {
  title: 'App/FileField',
  component: FileField,
  argTypes: {},
};

const Template = args => <FileField {...args} />;

export const Default = Template.bind({});
Default.args = {};
