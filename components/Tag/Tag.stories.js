import Tag from './Tag';

export default {
  title: 'App/Tag',
  component: Tag,
  argTypes: {},
};

const Template = args => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {};
