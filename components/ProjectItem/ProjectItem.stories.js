import ProjectItem from './ProjectItem';

export default {
  title: 'App/ProjectItem',
  component: ProjectItem,
  argTypes: {},
};

const Template = args => <ProjectItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
