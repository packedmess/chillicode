import Article from './Article';

export default {
  title: 'App/Article',
  component: Article,
  argTypes: {},
};

const Template = args => <Article {...args} />;

export const Default = Template.bind({});
Default.args = {};
