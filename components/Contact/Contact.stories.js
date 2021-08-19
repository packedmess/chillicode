import Contact from './Contact';

export default {
  title: 'App/Contact',
  component: Contact,
  argTypes: {},
};

const Template = args => <Contact {...args} />;

export const Default = Template.bind({});
Default.args = {};
