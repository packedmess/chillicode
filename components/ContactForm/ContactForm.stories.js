import ContactForm from './ContactForm';

export default {
  title: 'App/ContactForm',
  component: ContactForm,
  argTypes: {},
};

const Template = args => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
