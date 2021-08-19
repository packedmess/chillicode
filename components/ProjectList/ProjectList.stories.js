import ProjectList from './ProjectList';

export default {
  title: 'App/ProjectList',
  component: ProjectList,
  argTypes: {},
};

const Template = args => <ProjectList {...args} />;

export const Default = Template.bind({});
Default.args = {};
