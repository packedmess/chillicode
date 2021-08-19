import Footer from './Footer';

export default {
  title: 'App/Footer',
  component: Footer,
  argTypes: {},
};

const Template = args => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
