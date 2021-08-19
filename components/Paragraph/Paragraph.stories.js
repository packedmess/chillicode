import Paragraph from './Paragraph';

export default {
  title: 'App/Typography/Paragraph',
  component: Paragraph,
  argTypes: {},
};

const Template = args => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  children:
    'We offer a full cycle of services necessary for the development of iOS and Android applications, from business analysis of your project idea to development, publication and support of an already published application.',
};
