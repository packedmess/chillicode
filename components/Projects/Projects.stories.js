import Projects from './Projects';

export default {
  title: 'App/Projects',
  component: Projects,
  argTypes: {},
};

const Template = args => <Projects {...args} />;

export const Default = Template.bind({});
Default.args = {};
