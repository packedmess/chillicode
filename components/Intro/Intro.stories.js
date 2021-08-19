import Intro from './Intro';

export default {
  title: 'App/Intro',
  component: Intro,
  argTypes: {},
};

const Template = args => <Intro {...args} />;

export const Default = Template.bind({});
Default.args = {};
