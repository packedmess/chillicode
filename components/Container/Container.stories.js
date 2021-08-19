import Container from './Container';

export default {
  title: 'App/Layout/Container',
  component: Container,
  argTypes: {},
};

const Template = args => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {};
