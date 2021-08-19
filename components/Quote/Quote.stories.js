import Quote from './Quote';

export default {
  title: 'App/Quote',
  component: Quote,
  argTypes: {},
};

const Template = args => <Quote {...args} />;

export const Default = Template.bind({});
Default.args = {};
