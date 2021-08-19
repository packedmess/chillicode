import TagList from './TagList';

export default {
  title: 'App/TagList',
  component: TagList,
  argTypes: {},
};

const Template = args => <TagList {...args} />;

export const Default = Template.bind({});
Default.args = {};
