import Heading from './Heading';

export default {
  title: 'App/Typography/Heading',
  component: Heading,
  argTypes: {},
};

const Template = args => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Heading',
  variant: 'h1',
};
