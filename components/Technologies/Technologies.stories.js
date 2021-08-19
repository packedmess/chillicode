import Technologies from './Technologies';

export default {
  title: 'App/Technologies',
  component: Technologies,
  argTypes: {},
};

const Template = args => <Technologies {...args} />;

export const Default = Template.bind({});
Default.args = {};
